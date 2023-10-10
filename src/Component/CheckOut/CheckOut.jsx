import React from 'react'
import './CheckOut.scss'
import SubTotal from "../Subtotal/SubTotal";
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';

function CheckOut() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h3>hellow</h3>
          <h1 className="checkout_title">your shoping basket</h1>
        </div>
        <div className="checkout_right">
          <SubTotal />
          <hr />
        </div>
      </div>
      <hr />
      {basket.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </>
  );
}

export default CheckOut