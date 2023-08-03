import { useState } from "react";
import Login from "./Login";

const Start = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row h-100">
          {" "}
          {/* Make the row take the full height */}
          <div className="col-md-6 my-auto">
            {" "}
            {/* Use 'my-auto' to vertically center the content */}
            <img
              src="https://ca-times.brightspotcdn.com/dims4/default/16cc793/2147483647/strip/true/crop/2048x1365+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe3%2F0b%2F02da915a4c30a3e76937b3b30c56%2Ffo-news-column-topanga-social-006.PNG"
              alt="half_image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 my-auto">
            <Login
              password={password}
              setPassword={setPassword}
              setEmail={setEmail}
              email={email}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
