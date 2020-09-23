export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  return () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
};