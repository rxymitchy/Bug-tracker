import { render, screen, waitFor } from '@testing-library/react'
import BugList from '../../pages/BugList'
import { getBugs } from '../../services/bugService'

jest.mock('../../services/bugService')

describe('BugList', () => {
  it('displays loading then shows bugs', async () => {
    getBugs.mockResolvedValue([
      { _id: '1', title: 'Test Bug', description: 'Test', status: 'open' }
    ])
    
    render(<BugList />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.getByText('Test Bug')).toBeInTheDocument()
    })
  })
})