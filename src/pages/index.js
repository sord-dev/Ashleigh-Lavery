import Head from "next/head";
import { About, Footer, Hero, Navbar, Projects } from "../components";

import data from "../../data.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashleigh Lavery | Makeup Artist</title>
        <meta
          name="description"
          content="WIP - will add metadata when provided"
        />
        <link rel="icon" href="/lipstick.ico" />
      </Head>

      <div className="container">
        {/* Navbar MOBILE MENU, LOGO?, FOLLOW ON SCROLL */}
        <Navbar />
        {/* Hero ADD SLIDER, IMAGES */}
        <Hero />
      </div>

      <div className="whitebg">
        <div className="container">
          {/* About Me PHOTOS, ANIMATIONS*/}
          <About />
        </div>
      </div>

      {/* Projects IMAGES */}
      <div className="container">
        <Projects projects={data.TEST_PROJECTS} />

        {/* Contact FORM, SUBMIT */}

        {/* Footer CONTACT LINKS, MADE BY */}
        <Footer />
      </div>
    </div>
  );
}
