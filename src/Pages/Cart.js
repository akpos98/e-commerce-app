import React from 'react'
import styled from 'styled-components'
import Announcement from "../componenets/Announcement"
import NavBar from "../componenets/NavBar"
import Footer from "../componenets/Footer"




const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 20px;
font-weight: 300;
cursor: pointer;
border: ${props=>props.type ==="filled"  && "none"};
background-color: ${props=>props.type ==="filled" ? "black" : "transparent"};
color: ${props=>props.type ==="filled"  && "white"};
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
`;

const Info = styled.div`
flex: 3;
`;

const Product = styled.div`

`
const ProductDetails = styled.div`

`
const Image = styled.img`

`
const Details = styled.div`

`
const ProductName = styled.h2`

`

const ProductId = styled.div`

`

const ProductSize = styled.div`

`

const ProductColor = styled.div`

`

const PriceDetails = styled.div`

`

const Summary = styled.div`
flex: 1;
background-color: blanchedalmond;
`;




const Cart = () => {
  return (
    <Container>
     <NavBar />
      <Announcement />
      
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>WishList</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info> Info
                <Product>
                <ProductDetails>

                    <Image src="" />
                    <Details>
                        <ProductName><b>Product :</b>MEGA POWER</ProductName>
                        <ProductId><b>Product ID :</b>463424378</ProductId>
                        <ProductColor />
                        <ProductSize><b>Product Size :</b>45.7</ProductSize>
                    </Details>
                </ProductDetails>
                <PriceDetails>
                    Price
                </PriceDetails>
                </Product>
            </Info>
            <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>

      <Footer />
   </Container>
  )
}

export default Cart
