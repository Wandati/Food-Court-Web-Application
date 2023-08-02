import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";



function App() {
  

  return <div className="App">
  
      <Routes>
        <Route path="/" element={ <Home />} /> {/* 👈 Renders at /app/ */}
      </Routes>
  

   
   


  </div>;
}



export default App;
