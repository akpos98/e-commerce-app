import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
flex: 1;
min-width: 280px;
height: 350px;
margin: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: azure;
border-radius: 20px;
position: relative;
`;

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: blue;
position: absolute;
`;

const Image = styled.img`
height: 250px;
z-index: 2;
`;

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: gray;
z-index: 3;
display: flex;
align-content: center;
justify-content: center;

/* width: 100px;
height: 100px; */
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
align-items: center;
justify-content: center;
`;



const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
            <ShoppingCartOutlined />
        </Icon>

        <Icon>
            <SearchOutlined />
        </Icon>

        <Icon>
            <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
