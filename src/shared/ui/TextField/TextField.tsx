import { ChangeEvent, FC } from 'react';

type TextFieldProps = {
  value?: string;
  onChange: (value: string) => void;
};

export const TextField: FC<TextFieldProps> = ({ onChange, value }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          onChange={handleChange}
          type="text"
          value={value}
        />
      </label>
    </div>
  );
};
