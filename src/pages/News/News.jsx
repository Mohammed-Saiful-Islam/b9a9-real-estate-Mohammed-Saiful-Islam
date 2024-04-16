import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="">
                <div className="">
                    <h2 className="text-5xl text-center">News Detail</h2>
                    <p className="text-center">{id}</p>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;