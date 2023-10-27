import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
// import React from 'react'
import styled from 'styled-components'
// import img from "../iphone.png"
import {SliderItems} from "../Data"
import { useState } from 'react';
// import phone from "../src/iphone.png"



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white;
position: relative;
overflow: hidden;
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
z-index: 2;
`;

const Wrapper = styled.div`
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=> props.bg};

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
cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick=(direction)=>{

    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}> 
        <ArrowBackIosOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>

        {SliderItems.map((item)=>(
          
          <Slide bg={item.bg} key={item.id}>

          <ImgContainer>
          <Image src= {item.img}/>
          </ImgContainer>
  
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
  
          </Slide>
          
        ))}

        

        
      </Wrapper>

      <Arrow direction="right"  onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
