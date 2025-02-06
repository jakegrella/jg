import Link from "next/link";
import CTAButton from "../components/CTAButton";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-8">
      <h1>Jake Grella</h1>
      <section className="">
        <h2>
          Your Tech-Driven Advisor in
          <br />
          Los Angeles Real Estate
        </h2>
        <h3 className="mt-2 mb-8">
          Smart data, personalized service, and a deep care
          <br /> for the communities we call home.
        </h3>
        <CTAButton href="/contact">Schedule a Consultation</CTAButton>
      </section>
      <section>
        <h2>Real Estate Meets Innovation & Care</h2>
        <ul className="flex flex-col gap-2 list-['—'] pl-4">
          {[
            "Data-Driven Insights: Get smarter advice on pricing, trends, and market timing.",
            "Personalized Service: I genuinely care about finding the best for you.",
            "Tech-Forward Approach: Seamless, transparent processes from start to close.",
          ].map((i) => (
            <li key={i} className="pl-2">
              {i}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Services</h2>
        <ul className="flex flex-col gap-2">
          {[
            "Buying a Home",
            "Selling a Home",
            "Market Data & Trends Analysis",
            "Community Exploration",
          ].map((i) => (
            <li key={i} className="bg-[#191918] p-2 rounded">
              {i}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Neighborhood Spotlights</h2>
        {[
          {
            name: "Los Feliz",
            slug: "/neighborhood/los-feliz",
            image: { src: "", alt: "" },
          },
          {
            name: "Silverlake",
            slug: "/neighborhood/silverlake",
            image: { src: "", alt: "" },
          },
          {
            name: "Hollywood",
            slug: "/neighborhood/hollywood",
            image: { src: "", alt: "" },
          },
          {
            name: "Beachwood",
            slug: "/neighborhood/beachwood",
            image: { src: "", alt: "" },
          },
        ].map((i) => (
          <Link key={i.slug} href={i.slug}>
            {/* <Image src={i.image.src} alt={i.image.alt} /> */}
          </Link>
        ))}
        <CTAButton href="/neighborhoods">Explore other communities</CTAButton>
      </section>
      <section>
        <h2>{`About Me`}</h2>
        {/* <Image src='./headshot' alt='headshot of real estate agent Jake Grella' /> */}
        <p>{`Hey neighbor,`}</p>
        <p>
          {`My name is Jake Grella and I'm a real estate agent in Los Angeles.
          I've always appreciated architecture—growing up in the Chicago suburbs
          spoiled me with both single-family home greats like Frank Lloyd Wright
          and incredible skyscrapers by Skidmore, Owings and Merrill that
          defined the skyline. I initially studied both architecture and
          business before ultimately finding my footing in software engineering.`}
        </p>
        <p>
          {`One unique thing about me is that I spend my days working as a
          software engineer in the finance industry. I love the mental challenge
          that software engineering offers, and I parlay those skills with my
          passion for real estate to offer clients a truly unique experience.
          From analyzing market trends to making the home-buying or selling
          process smoother and more efficient, I leverage technology to help my
          clients make smarter decisions and navigate the process with
          confidence.`}
        </p>
        <p>
          {`When I'm not at work or helping clients, you can usually find me
          outdoors. I spend about 10 hours a week hiking or walking. My fiancée
          and I have wandered through most of the hills, paved or not, at least
          once. The access to nature right here in Los Angeles, along with the
          incredible surrounding areas, is what keeps me rooted in this city.`}
        </p>
        <p>
          {`As a real estate agent, I strive to provide clients with a thoughtful and
          well-informed process. Whether you're buying your first home,
          investing, or selling a property, I'll guide you with care, insight,
          and innovative solutions every step of the way.`}
        </p>
        <p>
          {`That's enough about me. If you think I can help you in any way or you
          just want to chat, please don't hesitate to reach out. I'd love to
          connect and hear your story.`}
        </p>
        <p>{`Hope to see you around,`}</p>
        <p>{`Jake`}</p>
      </section>
    </div>
  );
}
