import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Bug Tracker')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Report Bug')).toBeInTheDocument()
  })
})