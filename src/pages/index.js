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

      {/* Hero - BACKGROUND IMAGES, LOAD IN ANIMATIONS */}
      <Hero />

      <div className="whitebg">
        <div className="container">
          {/* About Me - ANIMATIONS */}
          <About />
        </div>
      </div>

      {/* Projects - IMAGES LIST, SORT BY CATAGORY, HOST IMAGES/USE URLS!!! */}
      <div className="container">
        <Projects projects={data.images} />
        {/* Contact - LINK LIST? */}
      </div>
    </div>
  );
}
