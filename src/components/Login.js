import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ email, password, setEmail, setPassword }) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form function .....");

    const user = {
      email: event.target.staticEmail.value,
      password: event.target.inputPassword.value,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data sent successfully:", data);

        // Reset the inputs after successful form submission
        setEmail("");
        setPassword("");

        // Check if email and password are not empty before navigating
        if (user.email && user.password) {
          // Navigate to the Home component after successful form submission
          navigate("/Home");
        } else {
          console.error("Email and password cannot be empty.");
        }
      })
      .catch((error) => {
        console.error("Error sending user data:", error);
      });
  };

  return (
    // Form to login to the webapp
    <div className="center-container">
      <form className="bigger-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control form-control-lg" // Use 'form-control-lg' class for larger input
              id="staticEmail"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control form-control-lg" // Use 'form-control-lg' class for larger input
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-success btn-lg">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
