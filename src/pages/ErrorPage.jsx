import ErrorDisplay from "../components/ErrorDisplay";
import Footer from "../components/Footer";
import Header from "../components/header";




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