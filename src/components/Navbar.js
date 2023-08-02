export default function Navbar({ query, setQuery }) {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body text-white"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h1 className="navbar-brand">Nextgen Food Court App</h1>
        <form className="d-flex" role="search">
          {/* <link to='/'>cart</link> */}
          <input
            className="form-control me-2"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Foods here"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
}
