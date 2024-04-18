import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { estate_title, image, segment_name, status, id } = news;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-16">
                <figure><img className="w-full md:h-48" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <h2>{segment_name}</h2>
                    <h2>for {status}</h2>
                    <Link to={`/news/${id}`}><button className="btn btn-success text-white">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;