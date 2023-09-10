import Footer from "../Components/Footer"
import styled from "styled-components";
import VideoData from "../data/VideoData";
import Playlist from "../Components/Playlist";
import {useState} from 'react'


const ContainerBIG = styled.div`
padding-top: 70px;
background-color: rgb(18,18,18);
color: whitesmoke;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h3`

`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 40px 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.typeof === "filled" && "none"};
  background-color: ${(props) =>
    props.typeof === "filled" ? "#ff6b00ff" : "transparent"};
  color: ${(props) => props.typeof === "filled" && "white"};
  width: 25vw;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: color 0.5s, transform 0.2s;
  filter: brightness(95%);
  &:active{
    transform: translateY(3px)
  }
  &:hover{
    filter: brightness(100%);
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
`;
const Video = styled.div`
  flex: 2;
`;
const SliderVid = styled.div`
  flex: 1;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 90px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const VidPlaylist = styled.div`
  flex: 1;
  margin: 5px 15px 40px 5px;
  min-width: 60vh;
  max-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(18,18,18);
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const IframeContainer = styled.div``;
const VideoPage = () => {
  const [vid, setVid] = useState("https://www.youtube.com/embed/GISdeIxfV1k");
  return (
    <ContainerBIG>
      <Wrapper>
      <Top>
        <Title>Introduction to 'Aqeedah & The Foundations of The Religion</Title>
        <TopButton typeof="filled">Bookstores</TopButton>
      </Top>
      <Main>
        <Video className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/hE26hBFZsQE" allowFullScreen></iframe>
        </Video>
        <SliderVid>
          <Playlist vid={vid} setVid={setVid}/>
        </SliderVid>
      </Main>
      <Bottom>
        <Container>
        {VideoData.map((item) => (
        <VidPlaylist>
          <IframeContainer className="ratio ratio-4x3">
            <iframe src={item.vidURL} key={item.id}></iframe>
          </IframeContainer>
          <Info></Info>
        </VidPlaylist>
        ))}
        </Container>
      </Bottom>
      <Footer/>
      </Wrapper>
    </ContainerBIG>
  )
}

export default VideoPage
