import { render, screen } from "@testing-library/react"
import { Loading } from "."

describe('<Loading />', () => {
  it('should render Loading', () => {
    render(<Loading />)

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  })
 })