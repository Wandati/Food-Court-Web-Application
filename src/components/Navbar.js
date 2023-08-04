import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Navbar() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body text-white"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h1 className="navbar-brand">NEXT GEN FOOD COURT APP</h1>

        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Foods here"
            aria-label="Search"
          />
        </form> */}

        <Link className="text-decoration-none" to="/">
          <div className="text-white text-decoration-none">Home</div>
        </Link>
        <Link className="text-decoration-none" to="/Login">
          <div className="text-white text-decoration-none">Login</div>
        </Link>
        <Link className="text-decoration-none" to="/Restaurants">
          <div className="text-white ">Our Restaurants</div>
        </Link>
        <Link className="text-decoration-none" to="/Cart">
          <div className="text-white text-decoration-none">View Cart</div>
        </Link>
      </div>
    </nav>
  );
}
