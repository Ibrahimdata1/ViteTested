import styled from "styled-components";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;
const InfoContainer= styled.div`
    flex: 1;
    padding: 0 50px;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Title = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-size: 40px;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
`;
const FilterContainer = styled.div`
    display: flex;
    margin: 30px 0;
    width: 50%;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const FilterTitle = styled.div`
    font-size: 20px;
`;
const FilterHarakat = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterCopy = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterCopyOption = styled.option`

`;
const FilterHarakatOption = styled.option`

`;
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 10px;
border: 2px solid teal;
border-radius: 5%;
background-color: whitesmoke;
cursor: pointer;
font-weight: 500;
color: black;

&:hover{
    font-weight: bolder;
}
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
                <Image src="/images/book1.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Book1</Title>
            <Desc>
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
            </Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Harakat</FilterTitle>
                    <FilterHarakat>
                        <FilterHarakatOption>100%</FilterHarakatOption>
                        <FilterHarakatOption>50%</FilterHarakatOption>
                        <FilterHarakatOption>none</FilterHarakatOption>
                    </FilterHarakat>
                </Filter>
                <Filter>
                    <FilterTitle>Copy</FilterTitle>
                    <FilterCopy>
                        <FilterCopyOption>Saudi</FilterCopyOption>
                        <FilterCopyOption>Egypt</FilterCopyOption>
                        <FilterCopyOption>Morocco</FilterCopyOption>
                    </FilterCopy>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon/>
                    <Amount>1</Amount>
                    <AddIcon/>
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Cart
