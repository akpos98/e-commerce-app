// import React from 'react'
import styled from "styled-components"
import { categories } from "../Data"
import CategoryItems from "./CategoryItems"



const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`

const Categories = () => {
  return (

    <Container>
      {categories.map((item)=>(
    <CategoryItems item={item} key={item.id} />
  
      ))}
    </Container>
  )
}

export default Categories
