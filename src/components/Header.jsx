import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const titleStyle = () => {
    return {
      textAlign: "center",
    };
  };

  const navStyle = () => {
    return {
      textAlign: "center",
    };
  };

  return (
    <div>
      <h1 style={titleStyle()}>Emerson Jordan's Developer Profile</h1>
      <div style={navStyle()}>
      <Link to="/">Home</Link> | <Link to="/schedule">Web Projects</Link> | <Link to="/seasonslist">Unity Projects</Link>
      </div>
      
    </div>
    
  );
}

export default Header;