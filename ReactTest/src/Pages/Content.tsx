import { Container } from "react-bootstrap";
import Playlist from "../Components/Playlist";

const Content = () => {
  return (
    <div
      className="embed-responsive embed-responsive-16by9 d-flex justify-content-center pt-5"
      style={{ backgroundColor: "#121212", color:'whitesmoke'}}
    >
      <Container className="d-flex justify-content-center align-content-center">
        <iframe
          className="embed-responsive-item"
          width={"600px"}
          height={"340px"}
          src="https://www.youtube.com/embed/GISdeIxfV1k"
        ></iframe>
        <Playlist/>
      </Container>
      
    </div>
    
  );
};

export default Content;
