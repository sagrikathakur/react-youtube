import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <CategoryFilter />
        <Feed />
      </div>
    </>
  )
}

export default Home