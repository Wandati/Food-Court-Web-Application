const Login = () => {
    const handleSubmit=(event) =>{

        console.log(event);


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

            <button type="button" className="btn btn-primary">Login</button>
        </form>

</div>

     );
}
 
export default Login;