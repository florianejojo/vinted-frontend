import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = ({ token, setLoginModal }) => {
    const { id } = useParams();
    const [offer, setOffer] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

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

    const managePayment = () => {
        if (token) history.push("/payment", { itemId: id });
        // else {
        //     setLoginModal(true);
        // }
    };

    return isLoading ? (
        "Is Loading"
    ) : (
        <div className="background">
            <div id="offer" className="container">
                <img
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                />
                <div className="right-side">
                    <div id="itemDescription">
                        <p id="price">{offer.product_price} €</p>

                        {offer.product_details.map((elem, index) => {
                            const keys = Object.keys(elem);
                            return (
                                <p key={index} id="keyValue">
                                    <span>{keys}</span>
                                    <span>{elem[keys]}</span>
                                </p>
                            );
                        })}
                    </div>
                    <div id="descr">
                        <p id="name">{offer.product_name}</p>
                        <p> Description: {offer.product_description}</p>
                        <p id="owner">
                            {" "}
                            Vendeur : {offer.owner.account.username}
                        </p>
                    </div>
                    <button onClick={managePayment}>Acheter</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;
