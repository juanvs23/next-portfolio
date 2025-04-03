import { Metadata } from "next";
import { GlassComponents, HoneyBackround, Sections } from "../components";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({params}: Readonly<{params:Promise<{locale: string}>}>): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'seo'});
 
  return {
    title: t('title'),
    description: t('description'),
  icons: {
      icon: [{ url: "/img/email-icon.png", type: "image/png" }],
    },
  };
}

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Hero />
        {/* <GlassComponents gbColor="linear-gradient(135deg, #444, #010a0a94)" /> */}
        <HoneyBackround/>
      </section>
      <section id="about" className="z-10">
        <Sections.ViewAbout />
        <GlassComponents gbColor="linear-gradient(135deg, rgb(68, 68, 68), rgb(4 37 46 / 80%))" />
      </section>
      <section id="skills" className="z-10">
        <Sections.Skills />
        <GlassComponents gbColor="linear-gradient(135deg, rgb(68, 68, 90), rgb(4 37 46 / 80%))" />
      </section>
      <section
        id="works"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Works />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(8 49 72 / 80%))" />
      </section>
      <section
        id="projects"
        className="min-h-screen flex justify-center align-middle items-center"
      >
        <Sections.Projects />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(6 27 51 / 50%));" />
      
      </section>
      <section
        id="contact"
        className="min-h-screen flex justify-center align-middle items-center pb-6"
      >
        <Sections.Contact />
        <GlassComponents gbColor="linear-gradient(135deg, #444, rgb(4 48 51 / 50%))" />
        {/*  <VideoBg videoUrl="/videos/mailarroba.mp4" /> */}
      </section>
    </div>
  );
}
