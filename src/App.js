//import logo from './logo.svg';
import './App.css';
//import React from 'react';
import Navbar from './Navbar';



function App() {
  const title='Welcome to Jerome Blog!';
  const likes= 55;

  
  

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p> 
      </div>
    </div>
  );


}

export default App;
