import React from 'react'
import NavBar from '../componenets/NavBar'
import Announcement from '../componenets/Announcement'
import Slider from '../componenets/Slider'
import Categories from '../componenets/Categories'




const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home
