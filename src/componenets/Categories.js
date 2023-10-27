// import React from 'react'
import styled from "styled-components"
import { categories } from "../Data"
import CategoryItems from "./CategoryItems"



const Container = styled.div`
display: flex;
padding: 20px;

`

const Categories = () => {
  return (
    <Container>
      {categories.map((item)=>(
    <CategoryItems item={item} />
      ))}
    </Container>
  )
}

export default Categories
