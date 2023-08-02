import { useEffect } from "react";
const Login = ({person,setPerson}) => {
    useEffect(() =>{
    fetch("http://localhost:3000/persons",{
        method:'POST',
        headers:{

            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(setPerson(person)),

    })
    



    },[])
    
    const handleSubmit=(event) =>{
        event.preventDefault();
        console.log("form function .....");



    }

    return ( 

<div className="center-container">
        <form className="small-form" onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
        </form>

</div>

     );
}
 
export default Login;