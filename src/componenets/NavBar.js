import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
/* height: 200px; */
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.div`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightblue;
align-items: center;
display: flex;
margin-left: 30px;
padding: 5px;
`;

const Input = styled.div`
width: 200px;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;


const Logo = styled.div`
font-weight: 500;
font-size: xx-large;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`;

const MenuItems = styled.div`
font-size: 15px;
cursor: pointer;
margin-left: 20px;
`;


const NavBar = () => {
  return (
   <Container>
    <Wrapper>
    <Left>
      <Language>EN</Language>
      <SearchContainer>
        <Input placeholder='Ener Search'/>
        <Search style={{color:"gray", fontSize:"16px"}}/>
      </SearchContainer>
    </Left>
    

    <Center>
      <Logo>DEFI</Logo>
    </Center>


    <Right>
      <MenuItems>Register</MenuItems>
      <MenuItems>Sign In</MenuItems>
      <MenuItems>
      <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined/>
      </Badge>
      </MenuItems>
    </Right>
    
    </Wrapper>
   </Container>
    
   
  )
}

export default NavBar
