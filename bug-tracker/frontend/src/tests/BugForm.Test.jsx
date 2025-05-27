import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BugForm from '../../pages/BugForm'
import { createBug } from '../../services/bugService'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../services/bugService')

describe('BugForm', () => {
  beforeEach(() => {
    createBug.mockClear()
  })

  it('renders the form with all fields', () => {
    render(
      <BrowserRouter>
        <BugForm />
      </BrowserRouter>
    )
    
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Description')).toBeInTheDocument()
    expect(screen.getByLabelText('Severity')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit Bug' })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(
      <BrowserRouter>
        <BugForm />
      </BrowserRouter>
    )
    
    fireEvent.click(screen.getByRole('button', { name: 'Submit Bug' }))
    
    expect(await screen.findByText('Title is required')).toBeInTheDocument()
    expect(screen.getByText('Description is required')).toBeInTheDocument()
    expect(createBug).not.toHaveBeenCalled()
  })

  it('submits valid form data', async () => {
    const mockBug = { _id: '123', title: 'Test Bug', description: 'Test Desc' }
    createBug.mockResolvedValue(mockBug)
    
    render(
      <BrowserRouter>
        <BugForm />
      </BrowserRouter>
    )
    
    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'Test Bug' }
    })
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'Test Description' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Submit Bug' }))
    
    await waitFor(() => {
      expect(createBug).toHaveBeenCalledWith({
        title: 'Test Bug',
        description: 'Test Description',
        severity: 'medium',
        status: 'open'
      })
    })
  })
})