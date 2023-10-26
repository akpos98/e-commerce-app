// import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: blue;
height: 30px;
color: white;
font-size: 16px;
font-weight: 400;
justify-content: center;
display: flex;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal, Free Shipping on oders over $50 above
    </Container>
  )
}

export default Announcement
