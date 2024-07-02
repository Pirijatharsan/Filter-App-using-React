import Button from '../components/Button'
import './recommended.css'

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button handleClick={handleClick} value="" title="All Product" />
          <Button handleClick={handleClick} value="Nike" title="Nike" />
          <Button handleClick={handleClick} value="Adidas" title="Adidas" />
          <Button handleClick={handleClick} value="Puma" title="Puma" />
          <Button handleClick={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  )
}
export default Recommended
