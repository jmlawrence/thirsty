import s from './Input.module.scss';

const Input = ({
  value,
  setValue,
  placeholder = '',
}: {
  value: string;
  setValue: (v1al: string) => void;
  placeholder?: string;
}) => {
  return (
    <input
      className={s.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
