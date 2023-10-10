import React from "react";
import "./SubTotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import {useNavigate } from "react-router-dom";

function SubTotal() {

  const [{basket}, dispatch] = useStateValue();
 const navigate = useNavigate();

  const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p className="subTotal_Counter">
              Subtotal ({basket.length} items): <strong>{value} </strong>
            </p>

            <small className="subTotal_gift">
              <input type="checkbox" />
              <p className="subTotal_gift_p"> this order contains a gift</p>
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subTotal_button"
        onClick={(e) => navigate("/Payment")}
      >
        Proceed to chekout
      </button>
    </div>
  );
}

export default SubTotal;
