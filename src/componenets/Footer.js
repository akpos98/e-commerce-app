import { Facebook, Instagram, LinkedIn, MailOutlineOutlined, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
display: flex;
`;

const Logo = styled.h1`
margin: 20px;
`;

const Desc = styled.p`
margin: 20px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialICon = styled.div`
width: 40px;
height: 40px;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
cursor: pointer;
border-radius: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 20px;

`;

const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
cursor: pointer;
display: flex;
flex-wrap: wrap;


`;

const ListItems = styled.li`
width: 50%;
margin-bottom: 20px;
`;

const ContactItem = styled.h4`
margin-bottom: 20px;
display: flex;
align-items: center;

`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DEFI</Logo>
        <Desc> 
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable. 
          </Desc>

        <SocialContainer>

            <SocialICon color='0000FF'>
                <Facebook />
            </SocialICon>

            <SocialICon color='d21c38'>
                <Instagram />
            </SocialICon>

            <SocialICon color='40bbea'>
                <Twitter />
            </SocialICon>

            <SocialICon color='0000FF'>
                <LinkedIn />
            </SocialICon>
            
        </SocialContainer>
      </Left>

     <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItems>Home</ListItems>
        <ListItems>Cart</ListItems>
        <ListItems>Man Fashion</ListItems>
        <ListItems>Woman Fashion</ListItems>
        <ListItems>Accessories</ListItems>
        <ListItems>My Account</ListItems>
        <ListItems>Order Tracking</ListItems>
        <ListItems>WishList</ListItems>
        <ListItems>Terms</ListItems>
      </List>
     </Center>

     <Right>
      <Title> Contact </Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/> 78 Commercial Avenue, Yaba, Lagos
      </ContactItem>

      <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +2348161259997
      </ContactItem>

      <ContactItem>
      <MailOutlineOutlined style={{marginRight:"10px"}}/> Casperdefi@gmail.com
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
     </Right>
    </Container>
  )
}

export default Footer
