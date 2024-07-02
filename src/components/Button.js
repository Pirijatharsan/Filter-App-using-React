const Button = ({ handleClick, title, value }) => {
  return (
    <button className="btns" onClick={handleClick} value={value}>
      {title}
    </button>
  )
}
export default Button
