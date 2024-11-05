import ErrorDisplay from "../components/ErrorDisplay";
import Footer from "../components/Footer";
import Header from "../components/Header";




const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <Header/>
            <main>
                <ErrorDisplay/>
            </main>
            <Footer/>
        </div>
    );
};

export default ErrorPage;