import Login from "./Login";
import { useState } from "react";

const Start = () => {
const[person,setPerson]=useState({})
const[email,setEmail]=useState("");
    return (
        
        <>
        <img  className="img_main" src="https://brokebankvegan.com/wp-content/uploads/2021/02/Elote-65Feature.jpg" alt="half_image" />
        <Login person={person} setPerson={setPerson} email={email} setEmail={setEmail}/>
        </>  
    
    );
}
 
export default Start;