import { Container } from "react-bootstrap";
import Playlist from "../Components/Playlist";
import { useState } from "react";

const Course = () => {
  const [vid,setVid] = useState('https://www.youtube.com/embed/GISdeIxfV1k')
  return (
    <div
      className="embed-responsive embed-responsive-16by9 d-flex justify-content-center pt-5"
      style={{ backgroundColor: "#121212", color: "whitesmoke" }}
    >
      <Container className="d-flex justify-content-center align-content-center">
        <iframe
          className="embed-responsive-item"
          width={"600px"}
          height={"340px"}
          src={vid}
        ></iframe>
        <Playlist vid={vid}
          setVid={setVid}/>
      </Container>
    </div>
  );
};

export default Course;
