export const useClick = (onClickFn) => {
  if (typeof onClickFn !== "function") return;
  const element = useRef();
  useEffect(() => {
    if (!element.current) return;
    element.current.addEventListener("click", onClickFn);
    return () => {
      if (!element.current) return;
      element.current.removeEventListener("click", onClickFn);
    };
  }, []);
  return element;
};