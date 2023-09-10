import { useState,createContext,} from "react";
import CardButton from "./CardButton";
import { Link } from "react-router-dom";


export const Appcontext = createContext(null)

type productDataProps = {
 setMainImage:any;
 sliderData:any;
 mainImage:any;
 onAddImg:any;
};

const CardboxSlide = ({setMainImage,sliderData,mainImage,onAddImg}: productDataProps) => {
  const [isHovering, setIsHovering] = useState(false);
 
  return (
    <>

    <div
      className="card p-0 border-0 d-flex flex-column align-items-center"
      style={{ maxHeight: "360px", maxWidth: "200px", cursor: "pointer"}}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      
    <Link to={'/checkout'}><img src={sliderData.imageURL} onClick={()=>onAddImg(sliderData)} key={sliderData.id} alt="book1" className="product--img" /></Link>
    
    <div
        className={`align-items-center d-flex flex-column lh-1 mt-0 pt-0 px-0 w-100 rounded ${
          isHovering ? "bgColor" : ""
        }`}
        style={{ maxWidth: "170px", minHeight: "118px" }}
      >
        <h3>{sliderData.name}</h3>
        <p className="price">{sliderData.price}</p>
        {isHovering && <CardButton/>}
      </div>
    </div>
    
    </>
  );
};

export default CardboxSlide;
