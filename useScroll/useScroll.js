export const useScroll = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handler = () => {
    setPos({
      x: window.scrollX,
      y: window.scrollY
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return pos;
};