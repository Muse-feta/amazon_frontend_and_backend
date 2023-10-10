import React from "react";
import "./CheckOutProduct.scss";
import { useStateValue } from "../StateProvider/StateProvider";

const CheckOutProduct = ({ id, image, title, rating, price, hidebutton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProductContainer">
      <img className="checkOutProduct_img" src={image} />
      <div className="product_info">
        <p>{title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckOutProduct;
