import Image from "next/image";
import Header from "./Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Header landing />
      <Link href="/tools/bubsy/grid-planner">
        <div className="bg-zinc-600 px-6 py-4 rounded-lg w-fit flex flex-col gap-2 hover:bg-zinc-500">
          <h2>Bubsy - Grid Planner</h2>
          <Image
            src="/grid-planner-screenshot.jpg"
            alt="screenshot of Bubsy - Grid Planner iOS app"
            width={100}
            height={100}
            className="rounded-sm"
          />
        </div>
      </Link>
    </div>
  );
}
