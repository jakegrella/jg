import type { BlogPost } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePublish: CollectionAfterChangeHook<BlogPost> = ({
    doc,
    previousDoc,
    req: { payload, context },
}) => {
    if (context.disableRevalidate) return

    if (doc.publishedStatus === 'published') {
        const path = `/blog/${doc.slug}`

        payload.logger.info(`Revalidating path: ${path}`)

        revalidatePath(path) // revalidate the specific blog post page
        revalidatePath('/blog') // revalidate the main blog page to ensure it reflects the latest posts

        // if post was previously published and is now unpublished, revalidate the previous path
        if (previousDoc.publishedStatus === 'published' && doc.publishedStatus !== 'published') {
            const oldPath = `/blog/${previousDoc.slug}`

            payload.logger.info(`Revalidating old path: ${oldPath}`)

            revalidatePath(oldPath)
        }
        return doc

    }
}