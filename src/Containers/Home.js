import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import axios from "axios";
import backgroundImg from "../vinted_background.jpeg";
import blankAvatar from "../assets/blank_avatar.svg";

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(
                "https://vintedreplica.herokuapp.com/offers"
            );
            setData(response.data);
            setIsLoading(false);
        };
        fetchdata();
    }, []);

    return isLoading ? (
        "is Loading"
    ) : (
        <div>
            <Header />
            <div id="preSection" className="container">
                <img src={backgroundImg} alt="backgroundImg" />

                <div>
                    <h2>Prêts à faire du tri dans vos placards ?</h2>
                    <button>Commencez à vendre</button>
                </div>
            </div>

            <div id="offers" className="container">
                {data.map((elem, index) => {
                    // console.log(elem._id);
                    return (
                        // <div >
                        <Link to={`/offer/${elem._id}`} key={index}>
                            <div className="user">
                                <img
                                    className="avatar"
                                    src={blankAvatar}
                                    alt="blankAvatar"
                                />

                                <p>{elem.owner.account.username}</p>
                            </div>
                            <img
                                src={elem.product_image.secure_url}
                                alt="Item_image"
                            />
                            {/* <div>{elem.product_name}</div> */}
                        </Link>
                        // </div>
                    );
                })}
            </div>
            {/* <Link to="/offer"> Go to Offer</Link> */}
        </div>
    );
};

export default Home;
