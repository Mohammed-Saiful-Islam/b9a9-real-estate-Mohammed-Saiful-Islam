import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
// import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
// import RightSideNav from "../Shared/RightSideNav/RightSideNav";
// import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Helmet>
                <title>
                    Residential | Home
                </title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            {/* <BreakingNews></BreakingNews> */}
            <div className="">
                {/* <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div> */}
                {/* news container */}
                <div className="">
                   {
                    news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                   }
                </div>
                {/* <div className="border">
                    <RightSideNav></RightSideNav>
                </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;