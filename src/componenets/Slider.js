import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
// import React from 'react'
import styled from 'styled-components'
import Img from "../iphone.png"


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white;
position: relative;
`;

const Arrow =  styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
`;

const Wrapper = styled.div`

`

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
`

const ImgContainer = styled.div`
flex: 1;
height: 100%;
`

const Image = styled.img`
height: 80%;
`


const InfoContainer = styled.div`

`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 400;
letter-spacing: 3px;

`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: greenyellow;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left"> 
        <ArrowBackIosOutlined />
      </Arrow>

      <Wrapper>
        <Slide>

        <ImgContainer>
        <Image src= {Img}/>
        </ImgContainer>

        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>DONT COMPORMISE ON JVJHBJKHDECHJYHKTXRRFTYJBERTJCETJKJ</Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>

        </Slide>

        <Slide>

        <ImgContainer>
        <Image src= {Img}/>
        </ImgContainer>

        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>DONT COMPORMISE ON JVJHBJKHDECHJYHKTXRRFTYJBERTJCETJKJ</Desc>
          <Button>SHOP NOW</Button>
        </InfoContainer>

        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
