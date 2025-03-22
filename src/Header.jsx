import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"



const Header = () => {
  return (
    <div className='header'>
      <div className="header1">
        <img  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart Logo" />
        <div className='header-first'>
          <span style={{
            fontSize:'11px',
            color:'white',
            fontStyle:'italic'
          }}>Explore</span>
          <span style={{
            color:'#f9e107',
            fontSize:'11px',
            fontStyle:'italic'
          }}>Plush</span>

          <span><img width='10' src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" /></span>
        </div>
        </div>
      <div className="header2">
        <input placeholder="Search for products" type="text"  />
        <SearchIcon />

      </div>
      <div className="header3">
        <button>Login</button>
      </div>
      <div className="header4">
        <span>More</span>
        <ExpandMoreIcon />
      </div>
      <div className="header5">
        <ShoppingCartIcon/>
        <p>Cart</p>
      </div>
    </div>
  ) 
}

export default Header