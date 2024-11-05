import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner"
import AboutDisplay from "../components/AboutDisplay";



const AboutPage = () => {
    return (
        <div className="aboutPage">
            <Header/>
            <AboutBanner />
            <main className="about-main">
                <AboutDisplay/>
            </main>
            <Footer/>
        </div>
    );
};

export default AboutPage;