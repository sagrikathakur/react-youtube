import React, { useState } from 'react'
import './CategoryFilter.css'
import { categories } from '../../data'

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="category-filter">
      <div className="category-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
