import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BugCard from '../components/BugCard'
import { getBugs } from '../services/bugService'

function BugList() {
  const [bugs, setBugs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const data = await getBugs()
        setBugs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBugs()
  }, [])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="bug-list">
      <div className="header">
        <h1>Bug Tracker</h1>
        <Link to="/new" className="btn">Report New Bug</Link>
      </div>
      <div className="bugs-grid">
        {bugs.map(bug => (
          <BugCard key={bug._id} bug={bug} />
        ))}
      </div>
    </div>
  )
}

export default BugList