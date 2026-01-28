import React from "react";
import {Link} from 'react-router-dom'

const Nav=()=>{
return(

    <div>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '15px', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>




    </div>
)
}
export default Nav