import { useState } from "react";
import Playlist_Nav from "./Playlist_Nav";

type PlaylistProps = {
  vid: string;
  setVid: React.Dispatch<React.SetStateAction<string>>;
};
const Playlist = ({ vid, setVid }: PlaylistProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="d-flex flex-column m-0 p-0 justify-content-start rounded"
      style={{
        maxWidth: "360px",
        border: "1px solid #4E4E4E",
        overflow: "scroll",
        maxHeight: "340px",
      }}
    >
      <Playlist_Nav />
      <div className="container d-flex flex-column align-items-center p-4 w-100">
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 rounded ${
            vid == "https://www.youtube.com/embed/GISdeIxfV1k" ? "active" : ""
          } mb-4 ${isHovering ? "bgColorForPlaylist" : ""}`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/GISdeIxfV1k")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 mb-4 ${
            vid == "https://www.youtube.com/embed/qc8J8c1gF3s" ? "active" : ""
          } rounded ${
            isHovering ? "bgColorForPlaylist" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/qc8J8c1gF3s")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 mb-4 ${
            vid == "https://www.youtube.com/embed/hE26hBFZsQE" ? "active" : ""
          } rounded ${
            isHovering ? "bgColorForPlaylist" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/hE26hBFZsQE")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 mb-4 ${
            vid == "https://www.youtube.com/embed/bAdvNuEDF9c" ? "active" : ""
          } rounded ${
            isHovering ? "bgColorForPlaylist" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/bAdvNuEDF9c")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 mb-4 ${
            vid == "https://www.youtube.com/embed/4_1fHceWkB0" ? "active" : ""
          } rounded ${
            isHovering ? "bgColorForPlaylist" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/4_1fHceWkB0")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
        <div
          className={`row w-100 d-flex align-items-center border-0 py-2 mb-4 ${
            vid == "https://www.youtube.com/embed/0xK5xt_eyes" ? "active" : ""
          } rounded ${
            isHovering ? "bgColorForPlaylist" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => setVid("https://www.youtube.com/embed/0xK5xt_eyes")}
        >
          <img
            src="/images/picyt.png"
            className="col mb-3"
            style={{ maxWidth: "120px" }}
          />
          <p className="col fw-bolder">01. Getting Started</p>
          <hr className="mx-auto" style={{ width: "90%" }} />
          <p className="fw-light m-0 small">
            In This Video We discuss the value of Aqeedah in it Course in the
            Arabic language
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
