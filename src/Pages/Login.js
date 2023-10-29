import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1602340410288-3c6c9298d7fa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D")
      center;
  
`
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
 font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  
`
const Link = styled.a`
margin: 5px 0px;
text-decoration: underline;
cursor: pointer;
`


const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="uSERNAME"/>
        <Input placeholder="Password"/>

        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
