import React, { useEffect, useState } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';
import data from './FakeData/fakeData';




function App() {

const user_15 = data.slice(0, 15);
const [user, setUser] = useState([]);

console.log(user_15);


useEffect(() =>{
  setUser(user_15)
},[])
  return (
    <div className="App">
      <h1>Friends {user.length}</h1>
      
        {
          user.map(users => <Friends friend = {users} key = {users.id}></Friends>)
        }
  
    </div>
  );
}

export default App;
