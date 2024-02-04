import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


function Header(){
  const titleStyle = () => {
    return {
      textAlign: "center",
    };
  };

  const navStyle = () => {
    return {
      textAlign: "center"
    };
  };

  const containerStyle = () => {
    return {
      marginBottom: "50px",
    };
  };

      // const currentPage = useContext(PageContext);

    // useEffect(() => {
    //   console.log(currentPage);
    // })

    
  return (
    <div style={containerStyle()}>
      <h1 style={titleStyle()}>Emerson Jordan's Software Projects</h1>
      <div style={navStyle()}>
      <Link to="/">Home</Link> | <Link to="/schedule">About Me</Link>
      </div>
      
    </div>
    
  );
}

export default Header;
