import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Commercial from "./components/commercial/Commercial";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import MediaGrid from "./components/mediaGrid/MediaGrid";
import Schematiq from "./components/schematiq/Schematiq";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
   <>
    <Header/>
    <HeroSection/>
    <About/>
    <MediaGrid/>
    <Schematiq/>
    <Cards/>
    <Commercial/>
    <Footer/>
   </>
  );
}
