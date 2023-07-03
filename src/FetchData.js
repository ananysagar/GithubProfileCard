import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProfileCard from './components/ProfileCard'
function FetchData() {
    const [users,setUsers] = useState([]);
   
    useEffect(() => {
      displayProfileCard();
    }, [])
    
    const displayProfileCard = (() =>{
      axios.get('https://api.github.com/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    })
  return (
    <div>
      <ProfileCard users={users}/>
    </div>
  )
}

export default FetchData