export const Button = ({ buttonText: text, callback, className }) => {
  return (
    <button className={className} onClick={callback}>
      {text}
    </button>
  );
};
