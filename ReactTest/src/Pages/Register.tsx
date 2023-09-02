import styled from "styled-components";
import { mobile } from "../Components/Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/biglibrary.jpg")center;
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({paddingTop:'0'})}
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: whitesmoke;
  border-radius: 5px;
  ${mobile({width:'75%'})}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border-radius: 5px;
  ${mobile({width:'100%'})}

  &:hover{
    font-weight: bolder;
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lasname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, l consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
