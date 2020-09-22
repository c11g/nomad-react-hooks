export const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const { value } = e.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (!willUpdate) return;
    setValue(value);
  };
  return [value, onChange];
};