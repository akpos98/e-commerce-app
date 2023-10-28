import React from 'react'
import styled from 'styled-components'
import { Send } from '@mui/icons-material'


const Container = styled.div`
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: aqua;
`

const Title = styled.h1`

`

const Desc = styled.div`
font-size: 24px;
font-weight: 400;
margin: 20px;
`

const InputContainer = styled.div`
/* width: 50%; */
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid gray;
opacity: 0.5;


`

// const Send = styled.div`
// width: 50px;
// `


const Input = styled.input`
width: 500px;

padding-left: 20px;
background-color: white;
/* border: none; */
`

const Button = styled.button`
border: none;
cursor: pointer;
background-color: blue;
color: white;
/* width: 40px; */

`


const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>

      <InputContainer>
      <Input placeholder='Enter Your email' />

      <Button>
        <Send />
      </Button>

      </InputContainer>
    </Container>
  )
}

export default NewsLetter











