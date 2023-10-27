import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Info = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
/* background-color: bisque; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;

`

const Button = styled.button`
border: none;
border-radius: 5px;
color: gray;
/* height: 40px;
width: 100px; */
background-color: white;
font-weight: 600;
cursor: pointer;
padding: 10px;

`

const CategoryItems = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItems
