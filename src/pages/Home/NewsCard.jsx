import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image, description, id } = news;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-16">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                            <p>{description} <Link to={`/news/${id}`} className="text-blue-600 font-bold">Read More...</Link></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;