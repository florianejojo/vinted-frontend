import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
//

const Offer = () => {
    // const id = "60928fd0463b6e00159c293b";
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
            <Header />
            <div id="offer" className="container">
                <img
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                />
                <div className="right-side">
                    <div>
                        <div>{offer.product_price}</div>
                        <div id="itemDescription">
                            <p>MARQUE : {offer.product_details[0].MARQUE}</p>
                            <p>TAILLE : {offer.product_details[1].TAILLE}</p>
                            <p>ETAT : {offer.product_details[2].ETAT}</p>
                            <p>COULEUR : {offer.product_details[3].COULEUR}</p>
                            <p>
                                EMPLACEMENT :
                                {offer.product_details[4].EMPLACEMENT}
                            </p>
                        </div>
                    </div>

                    <div>{offer.product_name}</div>
                    <div> {offer.product_description}</div>
                    <button>Acheter</button>
                </div>
            </div>
            <Link to="/"> Go to Home</Link>;
        </div>
    );
};

export default Offer;
