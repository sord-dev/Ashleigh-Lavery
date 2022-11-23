import Head from "next/head";
import { About, Hero, Navbar, Projects } from "../components";

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
        {/* Navbar */}
        <Navbar />

        {/* Hero Slider */}
        <Hero />
      </div>

      <div className="whitebg">
        <div className="container">
          {/* About Me */}
          <About />

          {/* Projects */}
          {/* <Projects />  */}

          {/* Contact */}

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}
