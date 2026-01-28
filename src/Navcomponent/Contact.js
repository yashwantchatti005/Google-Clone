import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const namedata=useRef();
  const handlesumbit=()=>{
    alert(`My name is ${namedata.current.value}`)
  }
const navigate=useNavigate();

  return (
    <div>
      <h1 style={{backgroundColor:"orange",height:"200px"}}>Welcome to Contact<br></br>
      <button onClick={()=>{navigate("/")}}>Go to home page</button></h1><br/>
   
<h1>uncontrolled forms</h1>


<form onSubmit={handlesumbit}>
          <lable1>NAME</lable1><br/>
          <input type='text'ref={namedata}/><br/> <br/>
          <input type="submit"/>
        </form>
</div>

  )
}

export default Contact