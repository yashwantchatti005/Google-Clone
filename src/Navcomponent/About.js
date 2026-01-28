import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  const[name,setname]=useState("");
  const[age,setage]=useState("");
  const[address,setaddress]=useState("");

  const handlesumbit=()=>{
    alert(`my name is ${name} and my age is ${age} and my address is ${address}`)
  }


  return (
       <div>
      <h1 style={{backgroundColor:"orange",height:"200px"}}>Welcome to About<br></br>
      <button onClick={()=>{navigate("/")}}>Go to home page</button></h1><br/>
{/* 
       <h2>Controlled forms</h2>
        
        <form onSubmit={handlesumbit}>
          <lable1>NAME</lable1><br/>
          <input type='text' onChange={(e)=>{setname(e.target.value)}}/><br/> <br/>
           <lable1>Age</lable1><br/>
          <input type='text' onChange={(e)=>{setage(e.target.value)}}/><br/> <br/>
                    <lable1>Address</lable1><br/>
          <input type='text' onChange={(e)=>{setaddress(e.target.value)}}/><br/> <br/>
          <input type="submit"/>
        </form> */}
        </div>

  )
}

export default About