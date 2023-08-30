import { useState } from "react";
import CardButton from "./CardButton";

type productDataProps = {
  name: string;
  imgURL: string;
  id: number;
  price: string;
};

const CardboxSlide = (props: productDataProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="card p-0 border-0 d-flex flex-column align-items-center"
      style={{ maxHeight: "360px", maxWidth: "200px", cursor: "pointer"}}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <img src={props.imgURL} alt="book1" className="product--img" />
      <div
        className={`align-items-center d-flex flex-column lh-1 mt-0 pt-0 px-0 w-100 rounded ${
          isHovering ? "bgColor" : ""
        }`}
        style={{ maxWidth: "170px", minHeight: "118px" }}
      >
        <h3>{props.name}</h3>
        <p className="price">{props.price}</p>
        {isHovering && <CardButton />}
      </div>
    </div>
  );
};

export default CardboxSlide;
