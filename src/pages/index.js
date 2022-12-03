import Head from "next/head";
import { About, Hero, Projects } from "../components";

import data from "../../data.json";

export default function Home({ catagories, projects }) {
  return (
    <div>
      <Head>
        <title>Ashleigh Lavery | Makeup Artist</title>
        <meta name="description" content="Ashleigh Lavery - Makeup Artistry" />
        <link rel="icon" href="/lipstick.ico" />
      </Head>

      <Hero />

      <main>
        <div className="whitebg">
          <div className="container">
            <About />
          </div>
        </div>

        <div className="container">
          <Projects {...{ projects, catagories }} />
        </div>
      </main>
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
