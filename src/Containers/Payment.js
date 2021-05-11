import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = ({ token }) => {
    const location = useLocation();
    const { itemId } = location.state;

    const stripe = useStripe();
    const elements = useElements();
    // console.log(token);

    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            // on récupère infos de paiement
            const cardElement = elements.getElement(CardElement);

            // on crée un token avec les infos de paiement + id acheteur
            const stripeResponse = await stripe.createToken(cardElement, {
                name: token,
            });
            //stripeResponse.token --> objet
            //stripeResponse.token --> token
            const stripeToken = stripeResponse.token.id;

            // requete vers backend avec token
            const response = await axios.post("http://localhost:3000/payment", {
                stripeToken,
                itemId,
            });
            // transaction completed
            if (response.data.status === "succeeded") {
                setCompleted(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            {completed ? (
                <p>
                    Merci pour votre achat, le vendeur a été prévenu et
                    procèdera à l'envoi du colis dans un délais de 7 jours.
                </p>
            ) : (
                <form className="payment container" onSubmit={handleSubmit}>
                    <CardElement className="cardElement" />
                    <button type="submit" disabled={!stripe}>
                        Payer
                    </button>
                </form>
            )}
        </div>
    );
};

export default Payment;
