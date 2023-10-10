import React, { useEffect, useState } from "react";
import "./Payment.scss";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckOutProduct from "../CheckOut/CheckOutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../Axios";
import { db } from "../Firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const Elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [Processing, setProcessing] = useState("");

  const [clientSecret, setClientSecreat] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/Payement/create?total=${getBasketTotal(basket) * 100} `,
        // url: `/Payement/create?total=${100 * 100} `,
      });
      setClientSecreat(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secret is >>>>>>>", clientSecret);

  // useEffect(() => {

  //   console.log("the secret is >>>>>>>", clientSecret);
  // },[clientSecret])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payeload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: Elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid) 
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });
        // history.replaceState('/orders')
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payement-container">
      <h1 className="payement-main-title">
        CheckOut (
        <Link className="link-remove" to="/CheckOut">
          {basket?.length} items{" "}
        </Link>
        )
      </h1>

      <div className="payement-section ps-1">
        <h3 className="payement-h1">Delivery Adress</h3>
        <div className="payment-adress">
          <p>{user?.email} </p>
          <p>123 React Lane</p>
          <p>Chicago, IL</p>
        </div>
      </div>
      <hr />
      <br />
      <br />

      <div className="payement-section">
        <h3 className="payement-h1">Review items and delivery</h3>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <hr />
      <br />

      <div className="payment-title-details">
        <h3 className="payment-title-details-h3">Payement Method</h3>

        <div className="payemnt_details">
          <form className="payment_form" onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payement_price_container">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value} </h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              {error && <div>{error}</div>}
            </div>
            <div className="div_button">
              <button
                className="payement-button"
                disabled={Processing || disabled || succeeded}
              >
                <span>{Processing ? <p>processing</p> : "Buy Now"} </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
