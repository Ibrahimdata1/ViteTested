import Album from "../Components/Album";
import Carousel from "../Components/Carousel";
import Slider from "../Components/Slider";
import { Container } from "react-bootstrap";
import { productData } from "../data/ProductData";


type HomeProps = {
  onAdd: any;
  onRemove: any;
  cartItem: any;
  setCartItem: any;
};
const Home = ({ onAdd, onRemove, cartItem, setCartItem}: HomeProps) => {
  return (
    <div>
      <Carousel />
      <Container>
        <Slider />
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
