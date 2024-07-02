import './nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CiShoppingCart } from 'react-icons/ci'

const Nav = ({ handleInputChange, value }) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            placeholder="Enter your search shoes"
            className="search-input"
            onChange={handleInputChange}
            value={value}
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
          <a href="#">
            <CiShoppingCart className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  )
}
export default Nav
