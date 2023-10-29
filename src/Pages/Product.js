import React from 'react'
import Samsung from "../images/samsung.png"
import styled from 'styled-components'
import Announcement from '../componenets/Announcement'
import NavBar from '../componenets/NavBar'
import NewsLetter from "../componenets/NewsLetter"
import Footer from "../componenets/Footer"
import { Add, Remove } from '@mui/icons-material'



const Container = styled.div`

`

const ImageContainer = styled.div`
flex: 1;

`

const InfoContainer = styled.p`
padding: 0px 50px;
`

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const Image = styled.img`
/* width: 100%; */
height: 70vh;
object-fit: cover;
`;

const Title = styled.h2`
margin: 0px 10px;
`;

const Desc= styled.p`
margin: 20px 10px;
`;

const Price = styled.p`
margin: 0px 10px;
font-size: 40px;
font-weight: 100;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;

const Filter= styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 24px;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize = styled.select`
font-size: 20px;
background-color: azure;
border-radius: 5px;
margin-left: 20px;
padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
border-radius: 10px;
cursor: pointer;
font-weight: 400;

&:hover{
  background-color: blue;
}
`;




const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />

        <Wrapper>

        <ImageContainer>
            <Image src={Samsung}/>
        </ImageContainer>


        <InfoContainer>
            <Title>Jump Suit</Title>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
            </Desc>
            <Price>$ 50.00</Price>

            <FilterContainer>
        
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
              </Filter>

              <Filter>
                <FilterTitle>Sizes</FilterTitle>

                <FilterSize>

                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>

                </FilterSize>
              </Filter>

            </FilterContainer>

              <AddContainer>

                <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                  <Add/>
                </AmountContainer>
                <Button>Add to Cart</Button>
              </AddContainer>

              </InfoContainer>

        </Wrapper>

      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Product
