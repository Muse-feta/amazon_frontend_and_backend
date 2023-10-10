import React, { useEffect, useState } from 'react'
import './Orders.scss'
import { useStateValue } from '../StateProvider/StateProvider';
import Order from '../Order/Order';
import { db } from '../Firebase';

const Orders = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const [orders, setOrders] = useState();

    useEffect(() => {
        
        if(user){
            db.collection("users").doc(user?.uid).collection("orders")
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) => setOrders(
                snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ))
        }else{
            setOrders([]);
        }
    }, [user]);
  return (
    <div className='orders_container'>
      <h1 className='orders_h1'>your orders</h1>
      <div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders