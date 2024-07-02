import Nav from './nav/Nav'
import Product from './product/Product'
import Recommended from './recommended/Recommended'
import './index.css'
import SideBar from './sidebar/SideBar'
import { useState } from 'react'
import product from './db/data'
import Card from './components/Card'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input filter
  const [query, setQuery] = useState('')

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filterItems = product.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  )

  //----------------radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //-------------button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredData = (product, selected, query) => {
    let filteredProducts = product

    // filtering input items
    if (query) {
      filteredProducts = filterItems
    }
    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, color, company, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          newPrice === title
      )
    }
    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    )
  }
  const result = filteredData(product, selectedCategory, query)

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  )
}
export default App
