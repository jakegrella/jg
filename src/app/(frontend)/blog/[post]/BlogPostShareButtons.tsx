'use client';

import type { BlogPost } from '@/payload-types';
import { FacebookLogoIcon, LinkedinLogoIcon, XLogoIcon } from '@phosphor-icons/react';

const IconButton = ({ shareUrl, children }: { shareUrl: string; children: React.ReactNode }) => {
  return (
    <button
      onClick={() => {
        window.open(shareUrl, '_blank');
      }}
      className="p-2 bg-primary text-white rounded-2xl hover:bg-blue-600 hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

export default function BlogPostShareButtons({ blogPost }: { blogPost: BlogPost }) {
  return (
    <div className="flex gap-2">
      <IconButton
        shareUrl={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          `https://jakegrella.com/blog/${blogPost.slug}`,
        )}`}
      >
        <FacebookLogoIcon />
      </IconButton>
      <IconButton
        shareUrl={`https://x.com/intent/post?text=${encodeURIComponent(
          `${blogPost.title} by ${blogPost.author}`,
        )}&url=${encodeURIComponent(window.location.href)}`}
      >
        <XLogoIcon />
      </IconButton>
      <IconButton
        shareUrl={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          `https://jakegrella.com/blog/${blogPost.slug}`,
        )}`}
      >
        <LinkedinLogoIcon />
      </IconButton>
    </div>
  );
}
