import { GlassComponents, Sections, VideoBg } from "./components";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Hero />
        <GlassComponents gbColor="linear-gradient(135deg, #444, #010a0a94)" />
        <VideoBg videoUrl={[{ type: "video/mp4", url: "/videos/home.mp4" }]} />
      </section>
      <section id="about" className="z-10">
        <Sections.About />
        <GlassComponents gbColor="linear-gradient(135deg, rgb(68, 68, 68), rgb(4 37 46 / 80%))" />
        <VideoBg videoUrl="/videos/about.mp4" />
      </section>
      <section
        id="works"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Works />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(8 49 72 / 80%))" />
        <VideoBg videoUrl="/videos/writting.mp4" />
      </section>
      <section
        id="projects"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Projects />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(6 27 51 / 50%));" />
        <VideoBg
          videoUrl={[
            { type: "video/webm", url: "/videos/code.webm" },
            { type: "video/mp4", url: "/videos/code.mp4" },
          ]}
        />
      </section>
      <section
        id="contact"
        className="min-h-screen flex justify-center align-middle items-center pb-6"
      >
        <Sections.Contact />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(4 48 51 / 50%))" />
        <VideoBg videoUrl="/videos/mailarroba.mp4" />
      </section>
    </>
  );
}
