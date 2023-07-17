import React, { useEffect, useState } from 'react'
import './App.css';
//import FetchData from './FetchData';
import ProfileCard from './components/ProfileCard'
import axios from 'axios'
import SearchFilter from './components/SearchFilter';
function App() {
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
    <div className="App">
      <SearchFilter />
      <ProfileCard users={users}/>
    </div>
  );
}

export default App;
