//import logo from './logo.svg';
//import React from 'react';
import Navbar from './Navbar';



function App() {
  const title='Welcome to Jerome Blog!';
  const likes= 55;
  //const person= {name: 'jerome', age: 23};
  const link= "http://www.google.com";
  

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
