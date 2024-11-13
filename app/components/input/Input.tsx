type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const Input = ({ onChange }: InputProps) => {
  return (
    <>
      <textarea onChange={onChange}></textarea>
    </>
  );
};

export default Input;
