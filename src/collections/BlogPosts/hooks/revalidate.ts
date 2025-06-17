import type { BlogPost } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePublish: CollectionAfterChangeHook<BlogPost> = ({
    doc,
    previousDoc,
    req: { payload, context },
}) => {
    if (context.disableRevalidate) return

    const revalidatePages = (paths: string[]) => {
        paths.forEach((path) => {
            payload.logger.info(`Revalidating path: ${path}`)
            revalidatePath(path)
        })
    }

    // if the post is being published, revalidate the new path
    if (doc.publishedStatus === 'published') revalidatePages([`/blog/${doc.slug}`, '/blog'])

    // if post was previously published, revalidate the old path (only other option is draft)
    else if (previousDoc.publishedStatus === 'published') revalidatePages([`/blog/${previousDoc.slug}`, '/blog'])

    return doc
}
