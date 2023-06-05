import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import { AuthContext } from '../../contexts/auth'
import { CardRepository } from '.'

describe('<CardRepository />', () => { 
  const repository = {
    id: 'id',
    name: 'name',
    description: 'description',
    stargazerCount: 'stargazerCount',
    viewerHasStarred: false
  }

  it('render the CardRepository with repository data', () => { 
    render(
      <MockedProvider mocks={[]}>
        <AuthContext.Provider value={{
          token: 'token',
          hasToken: 'token',
          saveToken: vi.fn(),
          getToken: vi.fn()
        }}>
          <CardRepository {...repository} />
        </AuthContext.Provider>
      </MockedProvider>
     
    )

    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(screen.getByText(/stargazerCount/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/star repository/i)).toBeInTheDocument()
  })

 })