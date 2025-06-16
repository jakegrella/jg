import config from '@payload-config';
import Link from 'next/link';
import { getPayload } from 'payload';

export default async function BlogPage() {
  try {
    const payload = await getPayload({ config });

    const blogPosts = await payload.find({
      collection: 'blog-posts',
      // where: {
      // publishedStatus: {
      //   equals: 'published',
      // },
      // },
      depth: 1,
    });

    return (
      <main className="flex flex-col h-full grow gap-8">
        {blogPosts.docs.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
          </Link>
        ))}
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return <p>Error loading blog posts.</p>;
  }
}
