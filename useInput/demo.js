const App = () => {
  const maxLen = (v) => v.length <= 10;
  const [value, onChange] = useInput("", maxLen);
  return (
    <div className="App">
      <input type="text" placeholder="Name" value={value} onChange={onChange} />
    </div>
  );
};