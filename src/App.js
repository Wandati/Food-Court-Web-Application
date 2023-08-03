import { Route,Routes } from "react-router-dom";
import Start from "./components/Start";
import Home from "./components/Home";





function App() {
  

  return <div className="App">
  {/* all routes to be contained here */}
      <Routes>
        {/* this is the root path */}
        <Route path="/" element={ <Start />} /> {/* 👈 Renders at /app/ */}
     
        {/* Add a new route for the Home component */}
        <Route path="/home" element={<Home />} />

      </Routes>
  
  

   


  </div>;
}



export default App;
