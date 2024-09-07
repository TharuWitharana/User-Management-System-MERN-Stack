import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import axios from 'axios';

const User = (props) => {

  const {_id,name,gmail,age,address}=props.user;

  const history=useNavigate();

  const deleteHandler=async()=>{
    await axios.delete(`http://localhost:5000/users/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/userdetails"))
}
  

  return (
    <div>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
       
        <h3>ID : {_id}</h3>
        <h3>Name : {name}</h3>
        <h3>Gmail : {gmail}</h3>
        <h3>Age : {age}</h3>
        <h3>Address : {address}</h3>
        <Link to={`/userdetails/${_id}`}>Update</Link>
        <button onClick={deleteHandler}>Delete</button>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
    </div>
  )
}

export default User
