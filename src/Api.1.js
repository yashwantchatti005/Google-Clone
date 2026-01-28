import React,{useEffect,useState} from "react";

const Api=()=>{
    const [user,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
        .catch((error)=>console.log("Error fetching data :",error));
    },[]);

    return(
        <div style={{ textAlign:"center",marginTop: "30px"}}>

            <h1>User data from API</h1>
            {user.map((user) => (
             <p key ={user.id}>{user.username}</p>
            ))}
        </div>
    
    )
}

export default Api