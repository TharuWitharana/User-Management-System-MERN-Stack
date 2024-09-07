import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Nav from '../Nav/Nav';
import axios from 'axios';

const UpdateUser = () => {

    const [inputs, setInputs]=useState({});
    const history=useNavigate();
    const id=useParams().id;

    useEffect(()=>{
       const fetchHandler=async()=>{
        await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res)=>res.data)
        .then((data)=>setInputs(data.user));
       };
       fetchHandler();
    },[id]);

    const sendRequest=async()=>{
        await axios.put(`http://localhost:5000/users/${id}`,{
          name:String(inputs.name),
          gmail:String(inputs.gmail),
          age:String(inputs.age),
          address:String(inputs.address),

        }).then((res)=>res.data);
    }

    const handleChange=(e)=>{
        setInputs((prevState)=>({
         ...prevState,
         [e.target.name]: e.target.value,
 
        }))
     }
 
     const handleSubmit=(e)=>{
         e.preventDefault();
         console.log(inputs);
         sendRequest().then(()=>history('/userdetails'))
     }

    return (
        <div>
            <Nav />
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <h1>Add Users</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br></br>
                <input type="text" name="name" onChange={handleChange} value={inputs.name} required></input>
                <br></br>
                <br></br>
                <label>Gmail</label>
                <br></br>
                <input type="gmail" name="gmail" onChange={handleChange} value={inputs.gmail} required></input>
                <br></br>
                <br></br>
                <label>Age</label>
                <br></br>
                <input type="text" name="age" onChange={handleChange} value={inputs.age} required></input>
                <br></br>
                <br></br>
                <label>Address</label>
                <br></br>
                <input type="text" name="address" onChange={handleChange} value={inputs.address} required></input>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateUser
