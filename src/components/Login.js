import React, { useState } from "react";

const Login = ({ email, setEmail }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form function .....");
    
    const user = {
      email: email,
      password: event.target.inputPassword.value,
    };

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
      // Reset the inputs after successful form submission
      setEmail("");
      setPassword("");
    })
    .catch(error => {
      console.error("Error sending user data:", error);
    });
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div className="center-container">
      {email && <p>Hello: {email}</p>}
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
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
