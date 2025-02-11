import { Metadata } from "next";
import Header from "../Header";

export const metadata: Metadata = {
  title: "Jake Grella",
  description: "Jake Grella",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen">
        <Header landing />
        <video
          autoPlay
          muted
          loop
          className="absolute z-[-1] top-0 left-0 h-screen object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="absolute bottom-4 right-4">audio: off</button>
      </div>
      {children}
    </div>
  );
}
