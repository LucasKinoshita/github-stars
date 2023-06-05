import { vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputUser } from '.'

describe('<InputUser />', () => { 
  it('render the InputUser', () => { 
    render(<InputUser handleUsername={vi.fn} />)

    expect(screen.getByLabelText(/insert the username/i)).toBeInTheDocument()
  })

  it('render the InputUser with value', async () => { 
    render(<InputUser handleUsername={vi.fn} />)

    userEvent.click(screen.getByLabelText(/insert the username/i))
    userEvent.type(screen.getByLabelText(/insert the username/i), 'username')

    await waitFor(() => {
      expect(screen.getByLabelText(/insert the username/i)).toHaveValue('username')
    })
  })
 })