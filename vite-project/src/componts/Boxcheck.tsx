type BoxCheckProps = {
    label: string;
    value: string;
    isChecked: boolean;
    onChange: (value: string) => void;
  };
  
  function BoxCheck({ label, value, isChecked, onChange }: BoxCheckProps) {
    return (
      <label style={{ margin: '0 1rem', cursor: 'pointer'}}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onChange(value)}
          style={{ marginRight: '0.5rem' }}
        />
        {label}
      </label>
    );
  };

export default BoxCheck;