import Login from "./Login";
import { useState } from "react";

const Home = () => {
const[person,setPerson]=useState({})


    return (
        <>
        <p>Hallo Home </p>
        <img src="" alt="half_image" />
        <Login person={person} setPerson={setPerson}/>
        </>


      );
}
 
export default Home;