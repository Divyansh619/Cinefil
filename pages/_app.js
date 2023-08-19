import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
       {/* #Footer */}
       <Footer />
    </div>
  );
}
