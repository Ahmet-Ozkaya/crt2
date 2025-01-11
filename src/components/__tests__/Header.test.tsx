import { render, screen } from '@testing-library/react'
    import { Provider } from 'react-redux'
    import { store } from '../../store/store'
    import Header from '../Header'

    test('renders header with navigation', () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      
      expect(screen.getByText(/Staff Hiring/i)).toBeInTheDocument()
      expect(screen.getByText(/Home/i)).toBeInTheDocument()
      expect(screen.getByText(/Calendar/i)).toBeInTheDocument()
    })
