import React, { useEffect, useState, useRef } from 'react'
import Nav from '../Nav/Nav';
import axios from 'axios';
import User from '../User/User'
import { useReactToPrint } from 'react-to-print'

const URL = 'http://localhost:5000/users'

//obtain data from URL
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Users(){

  //setusers using usestate
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, [])

 
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle:"Users Report",
      onAfterPrint:()=>alert("User report succesfully downloaded")
    });

    //search func imlimentation
    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);

    const handleSearch=()=>{
      fetchHandler().then((data) => { 
        const filteredUsers=data.users.filter((user)=>Object.values(user).some((field)=>field.toString().toLowerCase().includes(searchQuery.toLowerCase())));
        setUsers(filteredUsers);
        setNoResults(filteredUsers.length===0);
    });
  }


  const handleSendReport=()=>{
    const phoneNumber="+94702665670";
    const message="User report downloaded successfully";
    const WhatsAppURL=`https://web.whatsapp.com/send?pnone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(WhatsAppURL,"_blank");
  }

  return (
    <div>
      <Nav />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 >
          All Users
        </h1>
        <input type="text" placeholder="Search Users" onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button onClick={handleSearch}>Search</button>

       
        {noResults? (<div><p>No Results Found</p></div>):(


        <div ref={componentRef}>
          {users && users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
        </div>
        )}
      </div>
      <button onClick={handlePrint}>Download Report</button>
      <br></br>
      <button onClick={handleSendReport}>Send WhatsApp Message</button>
    </div>
  )
}

export default Users
