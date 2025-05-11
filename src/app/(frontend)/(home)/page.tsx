// import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-lg my-0 mx-auto grow flex flex-col items-center justify-center gap-4 text-pretty">
      <p>
        Hey Neighbor, I&apos;m Jake Grella — a real estate agent at Keller Williams Los Feliz and a
        software engineer. I take a tech-forward, data-driven approach to real estate which means
        analyzing market trends, optimizing strategy, and providing clear, honest guidance to help
        you make confident decisions.
      </p>
      <p>
        With a background in both corporate and freelance software development, I bring a modern
        mindset to branding, marketing, and client experience. Whether you&apos;re buying, selling,
        or investing, I simplify the process, communicate clearly, and always put your goals first.
      </p>
      <p>
        I care deeply about the communities I serve and am actively building a real estate business
        that blends smart strategy with genuine connection. This is just the beginning, and I&apos;m
        excited to grow alongside the people I work with.
      </p>
      {/* <Image
        src="/signature.png"
        alt="Jake signature"
        width={64}
        height={115}
        className="-translate-x-2.5"
      /> */}
    </main>
  );
}
