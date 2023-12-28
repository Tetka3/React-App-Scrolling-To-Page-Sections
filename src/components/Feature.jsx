import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";
import { HashLink as Link } from 'react-router-hash-link';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: black;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container id="feature"> 
      <Left>
        <Image src={App} /> 
      </Left>
      <Right>
        <Title>
          <b>Elegant</b> Designs
          <br />
          <b>Excellent</b> business
        </Title>
        <SubTitle>We know understand that good design means good business!</SubTitle>
        <Desc>
          For this reason, we help our esteemed clients to succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We take care of your business and guarantee you to achieve marketing goals.
        </Desc>
        <Link to="#contact"><Button>Learn More</Button></Link>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
