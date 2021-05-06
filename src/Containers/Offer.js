import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
    const { id } = useParams();
    const [offer, setOffer] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(
                `https://vintedreplica.herokuapp.com/offer/${id}`
            );
            setOffer(response.data);
            setIsLoading(false);
        };
        fetchdata();
    }, [id]);

    return isLoading ? (
        "Is Loading"
    ) : (
        <div>
            <div id="offer" className="container">
                <img
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                />
                <div className="right-side">
                    <div>
                        <div id="itemDescription">
                            <p id="price">{offer.product_price} Euros</p>

                            {offer.product_details.map((elem) => {
                                const keys = Object.keys(elem);
                                return (
                                    <p>
                                        {keys} : {elem[keys]}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <p>{offer.product_name}</p>
                        <p> {offer.product_description}</p>
                        <p id="owner"> {offer.owner.account.username}</p>
                    </div>

                    <button>Acheter</button>
                </div>
            </div>
            <Link to="/"> Go to Home</Link>
            <Link to="/Signup">S'inscrire</Link>
        </div>
    );
};

export default Offer;
