import styled from "styled-components";
import Product from "../Components/Product";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  margin: 20px;
  font-weight: 600;
`;
const FilterText = styled.div`
  font-size: 20px;
  margin-right: 20px;
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
