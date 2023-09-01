
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    position: relative;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: whitesmoke;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const Catagory = ({item}:any) => {
  return (
    <Container>
      <Img src={item.imageURL}/>
      <Info>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default Catagory
