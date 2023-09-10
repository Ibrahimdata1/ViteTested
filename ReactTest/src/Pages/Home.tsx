import Album from "../Components/Album";
import Carousel from "../Components/Carousel";
import Slider from "../Components/Slider";
import { Container } from "react-bootstrap";
import { productData } from "../data/ProductData";
import { useState } from "react";


type HomeProps = {
  onAdd: any;
  onAddImg:any;
  onRemove: any;
  cartItem: any;
  setCartItem: any;
  setMainImage:any;
  mainImage:any;
  sliderData:any
};
const Home = ({ onAdd, onRemove, cartItem, setCartItem,setMainImage,mainImage,sliderData,onAddImg}: HomeProps) => {
  const recommend = 'Recommend Books'
  const newArrival = 'New Arrivals'
  return (
    <div>
      <Carousel />
      <Container>
          <Slider title={recommend} sliderData={sliderData} mainImage={mainImage} setMainImage={setMainImage} onAddImg={onAddImg}/>
        <Slider title={newArrival} sliderData={sliderData} mainImage={mainImage} setMainImage={setMainImage} onAddImg={onAddImg}/>
        <div className="row">
          {productData.map((product) => (
            <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
              <div
                className="card p-1 mt-2 border-0"
                style={{ maxHeight: "450px", maxWidth: "250px" }}
              >
                <Album
                  onAdd={onAdd}
                  product={product}
                  onRemove={onRemove}
                  Item={cartItem.find((e: any) => e.id === product.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
  </div>
  );
};

export default Home;
