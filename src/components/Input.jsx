import "./Input.css";

export const Input = ({ value, onChange, max,min , type, id, ...props }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      max={max}
      min={min}
      {...props}
    />
  );
};
