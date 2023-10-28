import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'



const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(5,7,0,0.1);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
transition: all 0.5s ease;



/* width: 100px;
height: 100px; */
`;



const Container = styled.div`
flex: 1;
min-width: 280px;
height: 350px;
margin: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F6F8FB;
position: relative;
border-radius: 20px;



&:hover ${Info}{
  opacity: 1;
}
`;

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 250px;
z-index: 2;
`;


const Icon = styled.div`
width: 40px; 
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center; 
margin: 10px;  
transition: all 0.5s ease;
cursor: pointer;

&:hover{
  background-color: white;
  transform: scale(1.1);
}
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
