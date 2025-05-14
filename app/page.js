import HomePage from "../component/HomePage";
import AboutMe from "../component/AboutMe";
import Services from "../component/Services";
import Work from "@/component/Work";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";


export default function Home() {
  return (
    <>
      <HomePage />
      <AboutMe/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
