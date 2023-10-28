import React from 'react'
import styled from 'styled-components'
import Announcement from '../componenets/Announcement'
import NavBar from '../componenets/NavBar'
import NewsLetter from '../componenets/NewsLetter'
import Footer from '../componenets/Footer'
import Products from '../componenets/Products'




const Container = styled.div`

`;
const Title = styled.h1`

`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;

`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`;
const Select = styled.select`
font-size: 24px;
background-color: azure;
border-radius: 5px;
margin-left: 15px;
padding: 10px;

`;

const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
      <Announcement/>
      <NavBar/>

      <Title>Dress</Title>
      <FilterContainer>
        
        <Filter>
          <FilterText>Flitered Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option> Black</Option>
            <Option>Yellow</Option>
          </Select>
          
          <Select>
            <Option disabled selected>Sizes</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>3XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Asc)</Option>
            <Option>Price (Dsc)</Option>
            
          </Select>
          </Filter>
      </FilterContainer>

        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList
