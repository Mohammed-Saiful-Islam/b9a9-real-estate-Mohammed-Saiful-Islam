import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image, description, _id } = news;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-16">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        description.length > 200
                            ?
                            <p>{description.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link></p>
                            :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;