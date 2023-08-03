export default function Navbar({ query, setQuery }) {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body text-white"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h1 className="navbar-brand">NEXT GEN FOOD COURT APP</h1>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Foods here"
            aria-label="Search"
          />
        </form>
        <div className="navbar-brand">View Cart</div>
      </div>
    </nav>
  );
}
