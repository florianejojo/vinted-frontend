import { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [picture, setPicture] = useState();
    const [error, setError] = useState("");
    // const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async (event) => {
        //

        try {
            event.preventDefault();
            if (isNaN(price)) {
                setError("Wrong price");
            } else if (!picture) {
                setError("No picture uploaded");
            } else {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("condition", condition);
                formData.append("city", city);
                formData.append("brand", brand);
                formData.append("size", size);
                formData.append("color", color);
                formData.append("picture", picture);
                console.log(formData);
                const response = await axios.post(
                    "https://vintedreplica.herokuapp.com/publish",
                    formData,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );

                history.push(`/offer/${response.data._id}`);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    // console.log(data);

    return (
        <div>
            {error ? (
                (setError(""), alert(error))
            ) : (
                <form onSubmit={handleSubmit} className="publish">
                    <div>
                        <h2>Vends un article</h2>
                        <input
                            type="text"
                            placeholder="Titre"
                            onChange={(event) => {
                                setTitle(event.target.value);
                                console.log(title);
                            }}
                        />
                        <textarea
                            id="desc"
                            type="text"
                            placeholder="Décris ton article"
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Prix"
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Etat"
                            onChange={(event) => {
                                setCondition(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Ville"
                            onChange={(event) => {
                                setCity(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Marque"
                            onChange={(event) => {
                                setBrand(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Taille"
                            onChange={(event) => {
                                setSize(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Couleur"
                            onChange={(event) => {
                                setColor(event.target.value);
                            }}
                        />
                        <p>Ajouter une photo : </p>
                        <input
                            id="fileInput"
                            type="file"
                            onChange={(event) => {
                                setPicture(event.target.files[0]);
                            }}
                        />
                        <button type="submit">Ajouter</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Publish;
