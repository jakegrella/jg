import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { BlogPosts } from './collections/BlogPosts'
import { EmailSubscribers } from './collections/EmailSubscribers'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Visits } from './collections/Visits'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, EmailSubscribers, Visits, BlogPosts],
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  editor: lexicalEditor(),
  email: resendAdapter({
    defaultFromAddress: 'jake@jakegrella.com',
    defaultFromName: 'Jake Grella',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  plugins: [payloadCloudPlugin()],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
