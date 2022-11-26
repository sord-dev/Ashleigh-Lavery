import { Footer, Navbar } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

function Layout({ children }) {
  return (
    <>
      {/* Navbar MOBILE MENU, LOGO?, FOLLOW ON SCROLL */}
      <Navbar />
      {children}
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
