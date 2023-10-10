import React from 'react'
import './Header.scss'
import amazon_logo from '../../Assets/amazon_logo.png'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase';

function Header() {

  const [{basket,user}, dispatch] = useStateValue();

  const hundleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  };
  
  return (
    <div className="Container">
      <Link to="./">
        <img className="header_logo" src={amazon_logo} alt="amazon logo" />
      </Link>

      <div className="Container_SerchBar">
        <input className="Container_SerchBar_input" type="text" />
      </div>

      <SearchIcon className="search_icon" />

      <div className="Container_hader_nav">
        <Link className="link_style_remover" to={!user && "./log"}>
          <div onClick={hundleAuthentication} className="header_option">
            <span className="header_optionalLine1">
              Hellow {!user ? " guest" : user.email}
            </span>
            <span className="header_optionalLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link_style_remover">
          <div className="header_option">
            <span className="header_optionalLine1">Returns</span>
            <span className="header_optionalLine2">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionalLine1">Your</span>
          <span className="header_optionalLine2">Prime</span>
        </div>
        <Link to="/checkout/">
          <div>
            <ShoppingCartIcon className="cart" />
          </div>
        </Link>
        <span className="header_optionalLine2 cart_counter">
          {basket.length}{" "}
        </span>
      </div>
    </div>
  );
}

export default Header