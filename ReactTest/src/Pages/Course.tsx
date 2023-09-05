import { Container } from "react-bootstrap";
import Playlist from "../Components/Playlist";
import { useState } from "react";

const Course = () => {
  const [vid, setVid] = useState("https://www.youtube.com/embed/GISdeIxfV1k");
  return (
    <div
      className="embed-responsive embed-responsive-16by9 flex-lg-row flex-column justify-content-lg-center align-items-lg-center"
      style={{
        backgroundColor: "#121212",
        color: "whitesmoke",
        minHeight: "100vh",
        paddingTop: "120px",
      }}
    >
      <Container
        className="flex-lg-row col-lg-12 flex-column d-lg-flex justify-content-lg-center"
        style={{ height: "70vh" }}
      >
        <div className="row-cols-auto mx-auto w-100 d-flex justify-content-center">
          <div className="col-lg-8 px-0 ms-lg-0 h-100">
            <iframe
              className="embed-responsive-item "
              width={"100%"}
              height={"100%"}
              src={vid}
            ></iframe>
          </div>
          <div className="col-lg px-0 d-flex justify-content-start w-100 ms-5 ms-lg-0 h-100 d-none d-lg-block">
            <Playlist vid={vid} setVid={setVid} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Course;
