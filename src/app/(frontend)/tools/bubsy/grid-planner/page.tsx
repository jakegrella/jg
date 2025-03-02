import Image from 'next/image';

export default function GridPlanner() {
  return (
    <div className="flex flex-col gap-4 max-w-3xl items-center my-0 mx-auto">
      <Image
        src={'/grid-planner-screenshot.jpg'}
        alt="screenshot of Bubsy - Grid Planner iOS app"
        width={200}
        height={200}
        className="rounded-sm"
      />
      <Image
        src={'/apple-app-store-download.svg'}
        alt="Download on the App Store (Apple)"
        width={100}
        height={100}
      />
      <p>
        Use Bubsy - Grid Planner on iOS devices to plan your Instagram profile grid. Unlike many of
        the other grid planning apps, Bubsy - Grid Planner was made to be extremely lightweight and
        simple. All of the photos you add to the app are linked to your device photos app, meaning
        we do not store them anywhere else. We also do not require you to log into our app using
        your Instagram account, or at all. Everything stays with you.
      </p>
    </div>
  );
}
