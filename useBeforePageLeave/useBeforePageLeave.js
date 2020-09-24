export const useBeforePageLeave = (cb) => {
  if (typeof cb !== "function") return;
  const handler = (event) => {
    if (event.clientY > 0) return;
    cb();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);
};