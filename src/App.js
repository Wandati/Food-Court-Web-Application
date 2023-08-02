import Login from "./components/Login";
import { useState } from "react";

function App() {

  const[person,setPerson]=useState({})

  return <div className="App">

    <Login person={person} setPerson={setPerson}/>
  </div>;
}



export default App;
