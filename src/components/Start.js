import Login from "./Login";
import { useState } from "react";

const Start = () => {
const[person,setPerson]=useState({})
    return (
        
        <>
        <p>Hallo Home </p>
        <img  className="img_main"   src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblue-texture&psig=AOvVaw39n9EWKA2mEnNWhu5YzQSw&ust=1691061661273000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjJ7t7tvYADFQAAAAAdAAAAABAE" alt="half_image" />
        <Login person={person} setPerson={setPerson}/>
        </>  
    
    );
}
 
export default Start;