import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BugList from './pages/BugList'
import BugForm from './pages/BugForm'
import BugDetail from './pages/BugDetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/new" element={<BugForm />} />
          <Route path="/bugs/:id" element={<BugDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App