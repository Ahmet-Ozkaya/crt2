import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { Provider } from 'react-redux'
    import { BrowserRouter } from 'react-router-dom'
    import App from './App'
    import { store } from './store/store'
    import GlobalStyles from './styles/GlobalStyles'

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
