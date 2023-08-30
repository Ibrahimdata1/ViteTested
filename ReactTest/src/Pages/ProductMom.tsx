import Product from "../Components/Product";
import styled from "styled-components";
import { productData } from "../data/ProductData";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import CatagoriesCard from "../Components/CatagoriesCard";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductMom = () => {
  return (
    <div>
      <CatagoriesCard/>
      <Container>
        {productData.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default ProductMom;
