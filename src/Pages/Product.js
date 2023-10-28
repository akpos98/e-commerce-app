import React from 'react'
import Samsung from "../images/samsung.png"
import styled from 'styled-components'
import Announcement from '../componenets/Announcement'
import NavBar from '../componenets/NavBar'
import NewsLetter from "../componenets/NewsLetter"
import Footer from "../componenets/Footer"



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

`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter= styled.div``;

const FilterTitle = styled.div``;

const FilterColor = styled.div``;

const FilterSize = styled.div``;

const FilterSizeOption = styled.div``;



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
        </InfoContainer>

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

        </Wrapper>

      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Product
