import Album from "../Components/Album";
import Carousel from "../Components/Carousel";
import Slider from "../Components/Slider";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Container>
        <Slider />
        <Album />
      </Container>
    </div>
  );
};

export default Home;
