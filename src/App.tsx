import { useState } from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { toggleTheme } from './store/features/themeSlice'
    import styled, { ThemeProvider } from 'styled-components'
    import { lightTheme, darkTheme } from './styles/theme'
    import Header from './components/Header'
    import Footer from './components/Footer'
    import MainContent from './components/MainContent'

    const AppContainer = styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `

    function App() {
      const themeMode = useSelector((state: RootState) => state.theme.mode)
      const dispatch = useDispatch()

      return (
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
          <AppContainer>
            <Header />
            <MainContent />
            <Footer />
          </AppContainer>
        </ThemeProvider>
      )
    }

    export default App
