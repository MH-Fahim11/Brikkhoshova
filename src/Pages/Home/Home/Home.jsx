import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import About from "../About/About";
import Header from "../Header/Header";
import LatestFromBlog from "../LatestFromBlog/LatestFromBlog";
import Services from "../Services/Services";




const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>

            <LatestFromBlog/>
            <Footer/>
           
        </>
    );
};

export default Home;