import { ChangeEvent, FC } from 'react';

type CheckboxProps = {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ checked, label, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          checked={checked}
          onChange={handleChange}
          type="checkbox"
        />
        {label && label}
      </label>
    </div>
  );
};
