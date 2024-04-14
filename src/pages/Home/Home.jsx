import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
// import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";


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
            <Slider></Slider>
            {/* <BreakingNews></BreakingNews> */}
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 border">
                   {
                    news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                   }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;