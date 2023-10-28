import React from 'react'
import NavBar from '../componenets/NavBar'
import Announcement from '../componenets/Announcement'
import Slider from '../componenets/Slider'
import Categories from '../componenets/Categories'
import Products from '../componenets/Products'
import NewsLetter from '../componenets/NewsLetter'




const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products />
      <NewsLetter />
    </div>
  )
}

export default Home
