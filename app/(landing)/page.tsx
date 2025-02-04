const CTAButton = ({ children }) => {
  return <button className="rounded-lg">{children}</button>;
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-8">
      <h1>Jake Grella</h1>
      <section className="">
        <h2>Your Tech-Driven Advisor in Los Angeles Real Estate</h2>
        <h3>
          Smart data, personalized service, and a deep care for the communities
          we call home.
        </h3>
        <CTAButton>Schedule a Consultation</CTAButton>
      </section>
    </div>
  );
}

// /* <Link href="/tools/bubsy/grid-planner">
//         <div className="bg-zinc-600 px-6 py-4 rounded-lg w-fit flex flex-col gap-2 hover:bg-zinc-500">
//           <h2>Bubsy - Grid Planner</h2>
//           <Image
//             src="/grid-planner-screenshot.jpg"
//             alt="screenshot of Bubsy - Grid Planner iOS app"
//             width={100}
//             height={100}
//             className="rounded-sm"
//           />
//         </div>
//       </Link> */
