import { createGlobalStyle } from 'styled-components'

    const GlobalStyles = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: all 0.3s ease;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
      }
    `

    export default GlobalStyles
