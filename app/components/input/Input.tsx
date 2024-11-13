type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ onChange }: InputProps) => {
  return (
    <>
      <input type="text" onChange={onChange}></input>
    </>
  );
};

export default Input;
