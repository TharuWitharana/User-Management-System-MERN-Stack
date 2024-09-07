import React,{useState} from 'react'
import {useNavigate} from 'react-router'
import Nav from '../Nav/Nav';
import axios from 'axios';

const AddUser = () => {

    const history=useNavigate();
    const [inputs,setInputs]=useState({
        name:"",
        gmail:"",
        age:"",
        address:"",
    });

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

    const sendRequest=async()=>{
        await axios.post("http://localhost:5000/users",{
          name:String(inputs.name),
          gmail:String(inputs.gmail),
          age:String(inputs.age),
          address:String(inputs.address),

        }).then(res=>res.data);
    }

    return (
        <div>
            <Nav />
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h1>Add Users</h1>
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
            
        </div>
    )
}

export default AddUser
