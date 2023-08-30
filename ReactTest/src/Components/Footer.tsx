import styled from "styled-components";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import {
  FacebookSharp,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  align-items: start;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <ImportContactsSharpIcon fontSize="large" style={{display:'flex', alignItems:'start'}}/>
        </Logo>
        <Desc>
          The best books in explanation by Ulama. Books contain good resource to
          study. It's so valuable Do Not Miss IT!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5959">
            <FacebookSharp />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACCE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Address</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Watchlist</ListItem>
          <ListItem>Sociak</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:'10px'}}/>
          241 Ladprao, Bangkok 10230
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}}/>
          +1 234 5678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:'10px'}}/>
          contact@bookstore.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
      
    </Container>
  );
};

export default Footer;
