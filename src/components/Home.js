
import React from 'react';

export default function Home (){

    

  return (
    <div>
     
     <nav className="navbar navbar-expand-md navbar-light bg-blue">
  <div className="container">
    <a className="navbar-brand" href="#">Your Logo</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      
      <div className="container mt-4">
        <p>it is the home page</p>
      </div>

      
      <footer className="bg-dark text-light text-center py-3">
        <p>© 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};