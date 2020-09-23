export const useTitle = (defaultTitle) => {
  const [title, setTitle] = useState(defaultTitle);
  const upadateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(upadateTitle, [title]);
  return setTitle;
};