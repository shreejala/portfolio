import {
  DownloadButton,
  MyContact,
  MyImage,
  MyProjects,
  MyTimeline,
  MyTitle,
} from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-14 lg:p-24 gap-14 lg:gap-24">
      <div className="flex flex-col-reverse lg:flex-row gap-5">
        <div className="flex flex-col justify-center gap-8">
          <MyImage />

          <MyContact />

          <DownloadButton />
        </div>

        <div className="md:ml-20 flex flex-row">
          <MyTitle />
        </div>
      </div>

      <div>
        <MyTimeline />
      </div>

      <div>
        <MyProjects />
      </div>
    </main>
  );
}
