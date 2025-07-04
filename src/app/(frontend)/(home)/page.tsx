import Link from 'next/link';

export default function Page() {
  return (
    <main className="w-full grow flex flex-col gap-4 uppercase">
      <div className="w-10 h-6 bg-[#ccff00]" />
      <h1>Jake Grella</h1>
      <h2>
        Los Angeles, California <br />
        Real Estate Agent
      </h2>
      <div>
        <span className="flex gap-2">
          <a href="sms:1-310-880-3185">Text</a>
          <a href="tel:1-310-880-3185" className="flex gap-22">
            <span>Call</span>
            <span>310.880.3185</span>
          </a>
        </span>
        <a href="mailto:jake@jakegrella.com" className="flex gap-8">
          <span>Email</span>
          <span>jake@jakegrella.com</span>
        </a>
      </div>
      <Link href="/blog">Blog</Link>
    </main>
  );
}
