import Landing from "../content/Landing";
import Introduction from "../content/Introduction";
import FeaturedLooks from "../content/FeaturedLooks";
import Gallery from "../content/Gallery";
import AboutMe from "../content/AboutMe";
import Contact from "../content/Contact";
import Footer from "./Footer";

export default function Main() {
    
    return(
        <>
            <main className='px-6 w-full mx-auto max-w-6xl lg:px-10'>
                <Landing />
                <Introduction />
            </main>
            <FeaturedLooks/>
            <Gallery/>
            <AboutMe/>
            <Contact />
            <hr className='border-none mt-20 h-[.05rem] bg-black'/>
            <Footer />
        </>
    );
};