import { Link } from 'react-router-dom'

function BugCard({ bug }) {
  return (
    <div className={`bug-card ${bug.status}`}>
      <h3>{bug.title}</h3>
      <p className="severity">{bug.severity}</p>
      <p className="status">{bug.status}</p>
      <Link to={`/bugs/${bug._id}`} className="btn">View Details</Link>
    </div>
  )
}

export default BugCard