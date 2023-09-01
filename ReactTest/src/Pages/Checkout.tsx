import styled from "styled-components";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  margin-left: 35px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.typeof === "filled" && "none"};
  background-color: ${(props) =>
    props.typeof === "filled" ? "black" : "transparent"};
  color: ${(props) => props.typeof === "filled" && "white"};
`;

const TopTexts = styled.span`
  display: flex;
  justify-content: center;
`;

const Toptext = styled.div`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductCopy = styled.span``;
const Image = styled.img`
  width: 200px;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductHarakat = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  color: goldenrod;
`;
const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
  margin-top: 40px;
`;
const SummaryTitle = styled.h3`
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.typeof === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;

const Checkout = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR KITAB</Title>
        <Top>
          <TopButton style={{ color: "black" }}>Continue Shopping</TopButton>
          <TopTexts>
            <Toptext>Shooping Bag (2)</Toptext>
            <Toptext>Your wishlist (0)</Toptext>
          </TopTexts>
          <TopButton typeof="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="/images/book3.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Book1
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>8943223994
                  </ProductID>
                  <ProductHarakat>
                    <b>Harakat: </b>100%
                  </ProductHarakat>
                  <ProductCopy>
                    <b>Copy: </b>Saudi{" "}
                  </ProductCopy>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="/images/book2.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Book2
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>8943223994
                  </ProductID>
                  <ProductHarakat>
                    <b>Harakat: </b>100%
                  </ProductHarakat>
                  <ProductCopy>
                    <b>Copy: </b>Saudi{" "}
                  </ProductCopy>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 60</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem typeof="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Checkout;
