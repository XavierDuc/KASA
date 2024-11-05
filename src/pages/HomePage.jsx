import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import Gallery from "../components/gallery";
import Header from "../components/Header";


const HomePage = () => {

  return (
    <div className="home">
      <Header />
      <main>
        <HomeBanner/>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
  };
  
  export default HomePage;