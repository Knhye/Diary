import "../styles/Button.css"

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default"
  return (
    <div className="Button">
      <button
        className={["Button", `Button_${btnType}`].join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
