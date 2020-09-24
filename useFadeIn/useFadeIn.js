export const useFadeIn = (duration = 1) => {
  if (typeof duration !== "number") return;
  const el = useRef();
  useEffect(() => {
    const { current } = el;
    if (!current) return;
    current.style.transition = `opacity ${duration}s ease-in-out`;
    current.style.opacity = 1;
  }, []);

  return {
    ref: el,
    style: { opacity: 0 }
  };
};