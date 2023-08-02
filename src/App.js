import Login from "./components/Login";
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";



function App() {
  const[person,setPerson]=useState({})

  return <div className="App">
  
      <Routes>
        <Route path="/" element={ <Home />} /> {/* 👈 Renders at /app/ */}
      </Routes>
  

    <Login person={person} setPerson={setPerson}/>
   


  </div>;
}



export default App;
