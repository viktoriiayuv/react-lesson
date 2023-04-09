const Button = ({ textContent, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {textContent}
    </button>
  );
};

export default Button;
