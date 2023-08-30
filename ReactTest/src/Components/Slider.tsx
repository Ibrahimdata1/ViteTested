import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardboxSlide from "./CardboxSlide";
import { productData, responsive } from "../data/ProductData";

const Slider = () => {
  
const product = productData.map((item)=>(
     <CardboxSlide name={item.name} imgURL={item.imageURL} id={item.id} price={item.price}/>
  ))

  return (
    <div>
      <h1>React Multi Carousel</h1>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default Slider;
