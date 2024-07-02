import Nav from './nav/Nav'
import Product from './product/Product'
import Recommended from './recommended/Recommended'
import Category from './sidebar/Category/Category'
import Color from './sidebar/Color/Color'
import Price from './sidebar/Price/Price'
import './index.css'

const App = () => {
  return (
    <>
      <Nav />
      <Product />
      <Recommended />
      <Category />
      <Color />
      <Price />
    </>
  )
}
export default App
