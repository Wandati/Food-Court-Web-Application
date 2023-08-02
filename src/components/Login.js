import { useEffect } from "react";

const Login = ({ person, setPerson, email, setEmail }) => {
  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(person), // Send the person object directly
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form function .....");

    // Create the user object with email and password
    const user = {
      email: email,
      password: event.target.inputPassword.value, // Get the password from the input field
    };

    // Now you can use this "user" object to send the data to the server
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      console.log("User data sent successfully:", data);
      // Do something with the response if needed, or handle successful login
    })
    .catch(error => {
      console.error("Error sending user data:", error);
      // Handle any errors that occurred during the fetch
    });
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  return (
    <div className="center-container">
      <h3>Hello: {email} </h3>
      <form className="small-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext"
              id="staticEmail"
              placeholder="email@example.com"
              onChange={handleChange}
              value={email}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
