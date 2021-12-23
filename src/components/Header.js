import React from 'react';
import { Link } from 'gatsby';

const Header = ({ onMenuToggle, isMenuOpen, style }) => {

return  <div
    style={{
      padding: '.5rem 1rem',
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 999,
      display: 'flex',
      justifyContent: 'space-between',
      transition: 'all .2s',
      ...style
    }}
    className='header'
  >
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {`: input / output :`}
      </Link>
    </h1>
    <span className='menu-toggle'>
      <a 
        href='#'
        onClick={e => {
          e.preventDefault();
          onMenuToggle();
        }}
      >
        {isMenuOpen?'Close Menu':'Menu'}
      </a>
    </span>
  </div>

}

export default Header;