import styled from "styled-components";
import Product from "../Components/Product";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { mobile } from "../Components/Responsive";

const Container = styled.div`
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 0 20px;
  ${mobile({width:'100%',flexDirection:'row',margin:'90px 0 0 10px',justifyContent:'center'})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({flexDirection:'column',alignItems:'start'})}
`;
const Title = styled.h1`
  margin:0 20px 20px 40px;
  font-weight: 600;
`;
const FilterText = styled.div`
  font-size: 20px;
  margin-right: 20px;
  ${mobile({marginBottom:'10px'})}
`;
const Selected = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`
`;
const ProductList = () => {
  return (
    <Container>
      <Title>Books</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Selected>
            <Option>Saudi</Option>
            <Option>Egypt</Option>
            <Option>Morroco</Option>
          </Selected>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Selected>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Selected>
        </Filter>
      </FilterContainer>
      <Product />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
