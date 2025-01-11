import styled from 'styled-components'
    import { useDispatch } from 'react-redux'
    import { toggleTheme } from '../store/features/themeSlice'

    const HeaderContainer = styled.header`
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 1rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `

    const Nav = styled.nav`
      display: flex;
      gap: 1rem;
    `

    const NavButton = styled.button`
      color: white;
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `

    const ThemeToggle = styled.button`
      background: none;
      border: none;
      color: white;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `

    const Header = () => {
      const dispatch = useDispatch()

      return (
        <HeaderContainer>
          <h1>Staff Hiring</h1>
          <Nav>
            <NavButton>Home</NavButton>
            <NavButton>Calendar</NavButton>
            <NavButton>History</NavButton>
            <NavButton>Account</NavButton>
          </Nav>
          <ThemeToggle onClick={() => dispatch(toggleTheme())}>
            {theme.mode === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </HeaderContainer>
      )
    }

    export default Header
