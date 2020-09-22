const tabs = [
  {
    label: "One",
    children: (
      <div>
        Hi, I am children of <i>One</i>
      </div>
    )
  },
  {
    label: "Two",
    children: (
      <div>
        Hi, I am children of <i>Two</i>
      </div>
    )
  }
];

const App = () => {
  const { content, handleTabClick } = useTabs(0, tabs);
  return (
    <div>
      {tabs.map((tab, index) => (
        <button type="button" key={index} onClick={() => handleTabClick(index)}>
          {tab.label}
        </button>
      ))}
      <div>{content}</div>
    </div>
  );
};