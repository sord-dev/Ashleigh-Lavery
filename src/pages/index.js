import Head from "next/head";
import { About, Hero, Projects } from "../components";

import data from "../../data.json";

export default function Home({ catagories, projects }) {
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

      <Hero />

      <div className="whitebg">
        <div className="container">
          <About />
        </div>
      </div>

      <div className="container">
        {/* Projects - ANIMATIONS */}
        <Projects {...{ projects, catagories }} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { images, catagories } = data;
  return {
    props: {
      catagories,
      projects: images,
    },
  };
}
