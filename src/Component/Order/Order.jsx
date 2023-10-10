import React from 'react'
import './Order.scss'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';
import CheckOutProduct from '../CheckOut/CheckOutProduct';

const Order = ({order}) => {
  return (
    <div className="order">
      <div className='order_second_container'>
        {/* <h2>Order</h2> */}
        <h3 className="order_h3">Order</h3>
        <div className="order_p">
          <p>{moment.unix(order.data.created).format("MMM D YYYY, h:mma")} </p>
          <p>{order.id}</p>
        </div>

        {order.data.basket?.map((item) => (
          <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hidebutton
          />
        ))}

        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order_totla">Order Total: {value} </h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order