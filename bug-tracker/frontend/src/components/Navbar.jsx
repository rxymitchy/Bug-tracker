import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Bug Tracker</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new">Report Bug</Link>
      </div>
    </nav>
  )
}

export default Navbar