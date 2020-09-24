export const useNotification = (message, options) => {
  if (!("Notification" in window)) return;

  const triggerNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(message, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(message, options);
    }
  };

  return triggerNotification;
};