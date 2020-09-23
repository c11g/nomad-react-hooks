export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = false;
  };

  const onProtect = () => {
    window.addEventListener("beforeunload", listener);
  };

  const onUnProtect = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return {
    onProtect,
    onUnProtect
  };
};