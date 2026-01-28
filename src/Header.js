import React, { useState } from 'react';
import './Header.css';

import yay from './Navcomponent/yay.jpeg';


const Header = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const countStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Counter</h2>
      <p style={countStyle}>Count: {count}</p>
      <button style={buttonStyle} onClick={increment}>+</button>
      <button style={buttonStyle} onClick={decrement}>-</button>

      {count === 5 &&  (
        <div>
          <img
            src={yay.jpeg} alt="Celebration"
          />
        </div>
      )}
    </div>

    
  );
};

export default Header;
