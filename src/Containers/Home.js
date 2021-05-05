import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(
                "https://vintedreplica.herokuapp.com/offers"
            );
            setData(response.data);
        };
        fetchdata();

        setIsLoading(false);
    }, []);

    return isLoading ? (
        "is Loading"
    ) : (
        <div>
            <Header />
            <div id="preSection" className="container">
                <img
                    src="https://www.journee-de-la-femme.com/wp-content/uploads/2018/11/vinted-application-pour-vendre-vos-vetements.jpg"
                    alt="Fond_vinted"
                />
                <div>
                    <h2>Prêts à faire du tri dans vos placards ?</h2>
                    <button>Commencez à vendre</button>
                </div>
            </div>

            <div id="offers" className="container">
                {data.map((elem, index) => {
                    console.log(elem);
                    return (
                        <div key={index}>
                            <div>
                                <span>
                                    Vendeur : {elem.owner.account.username}
                                </span>
                                <span></span>
                            </div>

                            <img
                                src={elem.product_image.secure_url}
                                alt="Item_image"
                            />
                            <div>{elem.product_name}</div>
                        </div>
                    );
                })}
            </div>
            <Link to="/offer"> Go to Offer</Link>
        </div>
    );
};

export default Home;
