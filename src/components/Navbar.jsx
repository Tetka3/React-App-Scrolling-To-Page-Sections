import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';

const Container = styled.div`
  height: 50px;   
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;  
`;

const Para = styled.p`
  font-weight: bold; 
  color: green;
  margin-left: 10px;
  font-size: 10px; 
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer; 
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo><i>TetkaAgency</i></Logo>
          <Para>Your preferred agency</Para>
          <Menu>
            <Link to="#home" style={{textDecoration: "none"}}><MenuItem>Home</MenuItem></Link>
            <Link to="#feature" style={{textDecoration: "none"}}><MenuItem>Features</MenuItem></Link>
            <Link to="#service" style={{textDecoration: "none"}}><MenuItem>Services</MenuItem></Link>
            <Link to="#pricing" style={{textDecoration: "none"}}><MenuItem>Pricing</MenuItem></Link>
            <Link to="#contact" style={{textDecoration: "none"}}><MenuItem>Contact</MenuItem></Link>
          </Menu>
        </Left>
        <Link to="#contact" style={{textDecoration: "none"}}><Button>JOIN NOW!</Button></Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
