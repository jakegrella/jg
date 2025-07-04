import { anonymousPro, newsreader } from '@/fonts';
import config from '@payload-config';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getPayload } from 'payload';
import BlogPostShareButtons from './BlogPostShareButtons';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function BlogPostPage() {
  const payload = await getPayload({ config });

  // Access the headers
  const slug = (await headers()).get('x-pathname')?.slice(6); // "/blog/"

  const blogPosts = await payload.find({
    collection: 'blog-posts',
    depth: 1,
    where: {
      slug: { equals: slug },
      publishedStatus: { equals: 'published' },
    },
  });
  const blogPost = blogPosts.docs[0];
  if (!blogPost) notFound();

  return (
    <main className="flex h-full grow justify-center items-center">
      <article className="flex flex-col gap-8 max-w-3xl">
        <header>
          <h1 className="text-2xl pb-0.5 text-pretty">{blogPost.title}</h1>
          <h2 className="pb-1 text-pretty">{blogPost.subtitle}</h2>
          <div className="flex gap-4">
            <div>
              <h3 className={anonymousPro.className}>{blogPost.author}</h3>
              <h4 className={anonymousPro.className}>
                <time dateTime={blogPost.publishedDate!}>
                  {new Date(blogPost.publishedDate!).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </h4>
            </div>
            <BlogPostShareButtons blogPost={blogPost} />
          </div>
        </header>
        <hr />
        <RichText data={blogPost.content!} className={newsreader.className} />
        <hr />
      </article>
    </main>
  );
}
