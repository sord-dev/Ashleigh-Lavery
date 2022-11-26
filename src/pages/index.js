import Head from "next/head";
import { About, Hero, Projects } from "../components";

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
        <Projects projects={data.images} />

        {/* Contact FORM, SUBMIT */}

      </div>
    </div>
  );
}
