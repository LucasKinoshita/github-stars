import { vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AuthContext } from '../../contexts/auth'
import { userMock } from './mock'
import { SearchRepositories } from '.'


describe('<SearchRepositories />',  () => { 
  it('render the SearchRepositories', async () => { 
    render(
      <MockedProvider mocks={[userMock]} addTypename={false}>
        <Router>
        <AuthContext.Provider value={{
          token: 'token',
          hasToken: 'token',
          saveToken: vi.fn(),
          getToken: vi.fn()
        }}>
          <SearchRepositories  />
        </AuthContext.Provider>
        </Router>
      </MockedProvider>
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByLabelText(/username.../i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search username/i)).toBeInTheDocument()
    expect(await screen.findByAltText(/avatar of login name/i)).toBeInTheDocument() 
  })

  it('render the InputUser with value', async () => { 
    render(
      <MockedProvider mocks={[userMock]} addTypename={false}>
        <Router>
          <AuthContext.Provider value={{
            token: 'token',
            hasToken: 'token',
            saveToken: vi.fn(),
            getToken: vi.fn()
          }}>
            <SearchRepositories  />
          </AuthContext.Provider>
        </Router>
      </MockedProvider>
    )

    const input = screen.getByLabelText(/username.../i)

    userEvent.click(input)
    userEvent.type(input, 'username')

    await waitFor(() => {
      expect(input).toHaveValue('username')
    })
  })
 })