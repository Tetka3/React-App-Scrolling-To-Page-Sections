import styled from "styled-components";
import PriceCard from "./PriceCard";
import Premium from "./Premium";
import Advanced from "./Advanced";


const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container id="pricing">
      <PriceCard price={10} type="Basic" />
      <Premium price={20} type="Premium" />
      <Advanced price={30} type="Advanced" />
    </Container>
  );
};

export default Price;
