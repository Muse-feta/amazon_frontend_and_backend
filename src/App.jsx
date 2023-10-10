import { useEffect, useState } from 'react'
import { EmblaCarousel } from './Component/BannerSlide/EmblaCarosel';
import CheckOut from './Component/CheckOut/CheckOut';
import { Routes, Route } from "react-router-dom";
import SharedLayout from './Component/SharedLayout/SharedLayout';
import LogIn from './Component/Login/LogIn';
import { useStateValue } from './Component/StateProvider/StateProvider';
import { auth } from './Component/Firebase';
import Payment from './Component/Payement/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from './Component/Header/Header';
import Orders from './Component/Orders/Orders';

const promise = loadStripe(
  "pk_test_51NyWfaHI4glNbvFMSdpTdMYyrbx8MZsI0Roz9uG2oLBcCUZ3WbSUpz2N9doqEzg7eHP6V6T5PMdjjHwKhCQljfpP00VwFF3pKX"
);


function App() {
  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }else{

        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/log" element={<LogIn />}></Route>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/Payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/" element={<EmblaCarousel />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App
