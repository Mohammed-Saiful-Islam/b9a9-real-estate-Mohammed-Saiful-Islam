import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { estate_title, image, id } = news;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-16">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <Link to={`/news/${id}`}>Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;