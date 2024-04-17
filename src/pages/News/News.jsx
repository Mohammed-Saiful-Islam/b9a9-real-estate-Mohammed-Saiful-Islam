import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const News = () => {
    const news=useLoaderData();
    const {id} = useParams();
    const idInt=parseInt(id);
    const aNews=news.find(aNews=>aNews.id===idInt);
    return (
        <div>
            <Helmet>
                <title>
                    Residential | {id}
                </title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <div className="">
                <section>
                    <div className="dark:bg-violet-600">
                        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{aNews.estate_title}</h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{aNews.description}</p>
                            <div className="flex flex-wrap justify-center">
                                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Get started</button>
                                <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <img src={aNews.image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                </section>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default News;