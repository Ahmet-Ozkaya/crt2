import styled from 'styled-components'

    const Content = styled.main`
      padding: 2rem;
      flex: 1;
    `

    const MainContent = () => {
      return (
        <Content>
          <h2>Welcome to Staff Hiring</h2>
          <p>Manage your casual staff efficiently and effectively.</p>
        </Content>
      )
    }

    export default MainContent
