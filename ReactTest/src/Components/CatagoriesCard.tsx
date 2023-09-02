import styled from "styled-components"
import Catagory from "./Catagory";
import SisCard from "../data/SisCard";
import { mobile } from "./Responsive";

const Container = styled.div`
    display: flex;
    padding-top: 90px;
    padding-bottom: 20px;
    justify-content: space-between;
    ${mobile({padding:'30px 0 0 0',flexDirection:'row'})}
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
