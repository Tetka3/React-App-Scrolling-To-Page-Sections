import styled from "styled-components";
import Woman from '../img/woman.png';
import AnimatedShapes from "./AnimatedShapes";
import { HashLink as Link } from 'react-router-hash-link';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  color: #061726;
  margin-top: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;    
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  margin-bottom: 40px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: green;
  font-weight: bold;
  font-size: 14px;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
  margin-bottom: 40px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
`

const Intro = () => {
  return (
    <Container id="home">
      <Left>
        <Title>Web Development In Action</Title>
        <Desc>
          At Tetka Agency, we believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          businesses.
        </Desc>
        <Info>
          <Link to="#contact"><Button>GET STARTED</Button></Link>
          <Contact>
            <Phone>Call Us: (+254) 720 035 176</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={Woman}/></Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Intro;
