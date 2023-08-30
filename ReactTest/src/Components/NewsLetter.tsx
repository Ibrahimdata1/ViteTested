import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-weight: 300px;
    font-size: 24px;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    background: transparent;
    `
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: whitesmoke;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updated from your favorite Books.</Desc>
      <InputContainer>
        <Input placeholder="Enter Your Email."/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
