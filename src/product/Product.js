import './product.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Product = () => {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">Shoes</h3>
            <section className="card-reviews">
              <AiFillStar className="ratting-star" />
              <AiFillStar className="ratting-star" />
              <AiFillStar className="ratting-star" />
              <AiFillStar className="ratting-star" />
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default Product
