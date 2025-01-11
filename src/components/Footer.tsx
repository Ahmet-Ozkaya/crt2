import styled from 'styled-components'

    const FooterContainer = styled.footer`
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 1rem;
      text-align: center;
      margin-top: auto;
    `

    const Footer = () => {
      return (
        <FooterContainer>
          <p>© {new Date().getFullYear()} Staff Hiring. All rights reserved.</p>
          <p>Contact: info@staffhiring.com</p>
        </FooterContainer>
      )
    }

    export default Footer
