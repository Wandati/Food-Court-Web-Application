import { Route,Routes } from "react-router-dom";
import Start from "./components/Start";



function App() {
  

  return <div className="App">
  
      <Routes>
        <Route path="/" element={ <Start />} /> {/* 👈 Renders at /app/ */}
      </Routes>
  

   
   


  </div>;
}



export default App;
