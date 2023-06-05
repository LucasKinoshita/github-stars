import { render, screen } from '@testing-library/react'
import { NotFoundIcon } from '.'

describe('<NotFoundIcon />', () => { 
  it('render the NotFoundIcon', () => { 
    render(<NotFoundIcon />)

    expect(screen.getByLabelText(/not found icon/i)).toBeInTheDocument()
  })
 })