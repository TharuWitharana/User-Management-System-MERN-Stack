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

  return (
    <div>
      <Nav />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 >
          All Users
        </h1>
        <div ref={componentRef}>
          {users && users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  )
}

export default Users
