import {
  ChangeEvent,
  forwardRef,
  LegacyRef
} from 'react';

type CheckboxProps = {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
};

export const Checkbox = forwardRef(function Checkbox({ checked, label, onChange }: CheckboxProps, ref) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          checked={checked}
          onChange={handleChange}
          ref={ref as LegacyRef<HTMLInputElement>}
          type="checkbox"
        />
        {label && label}
      </label>
    </div>
  );
});
