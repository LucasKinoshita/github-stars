import { render, screen } from '@testing-library/react'
import { Aside } from '.'

describe('<Aside />', () => { 
  const user = {
    name: 'name',
    login: 'login',
    bio: 'bio',
    company: 'company',
    location: 'location',
    websiteUrl: 'websiteUrl',
    avatarUrl: 'avatarUrl'
  }

  it('render the aside with user data', () => { 
    render(<Aside user={user} />)

    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/bio/i)).toBeInTheDocument()
    expect(screen.getByText(/company/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()
    expect(screen.getByText(/websiteurl/i)).toBeInTheDocument()
    expect(screen.getByAltText(/avatar of login/i)).toBeInTheDocument()
  })
 })