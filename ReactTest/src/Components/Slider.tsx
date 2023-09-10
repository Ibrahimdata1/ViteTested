import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardboxSlide from "./CardboxSlide";
import { responsive } from "../data/ProductData";
import styled from "styled-components";

type SliderProps = {
  title:any;
  sliderData:any;
  setMainImage:any;
  mainImage:any;
  onAddImg:any
}
const Slider = ({title,sliderData,setMainImage,mainImage,onAddImg}:SliderProps) => {
  
const Container = styled.div`
  
`
const Title = styled.h5`
  border-bottom: 2px solid #F4F5F6;
  color: #ff6b00ff;
  font-weight: bold;
  margin-bottom: 20px;
`
  return (
    <Container>
      <Title>{title}</Title>
      <Carousel responsive={responsive}>
      {sliderData.map((item:any)=>(
     <CardboxSlide sliderData={item} mainImage={mainImage} setMainImage={setMainImage} onAddImg={onAddImg}/>
     ))} 
      </Carousel>
    </Container>
  );
};

export default Slider;
