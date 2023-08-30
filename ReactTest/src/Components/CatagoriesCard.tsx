import styled from "styled-components"
import Catagory from "./Catagory";
import SisCard from "../data/SisCard";

const Container = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-between;
`;

const CatagoriesCard = () => {
  return (
    <Container>
        {SisCard.map((item)=>
      <Catagory item={item}/>)}
    </Container>
  )
}

export default CatagoriesCard
