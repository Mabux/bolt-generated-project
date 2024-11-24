import styled from 'styled-components'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
`

export const Navigation = () => {
  return (
    <Nav>
      <Logo>Your Logo</Logo>
      <Links>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <Button>Get My Quote</Button>
      </Links>
    </Nav>
  )
}
