import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { InputToken } from '.'

describe('<InputToken />', () => { 
  it('render the InputToken', () => { 
    render(
      <Router>
        <InputToken  />
      </Router>
    )

    expect(screen.getByLabelText(/insert your token here/i)).toBeInTheDocument()
    expect(screen.getByText(/Don't know how to generate the token?/i)).toBeInTheDocument()
    expect(screen.getByText(/access documentation/i)).toBeInTheDocument()
  })
 })