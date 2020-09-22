export const useTabs = (initIndex, tabs) => {
  const [currentIndex, setCurrentIndex] = useState(initIndex);
  return {
    content: tabs[currentIndex].children,
    handleTabClick: setCurrentIndex
  };
};