import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const handleEscapeKey = React.useCallback(() => setToasts([]), []);
  useEscapeKey(handleEscapeKey);

  const handleDismiss = (dismissId) => {
    const nextToastStack = toasts.filter(({ id }) => id !== dismissId);
    setToasts(nextToastStack);
  };

  const createToast = (variant, message) => {
    const nextToastStack = [...toasts];
    nextToastStack.push({ id: crypto.randomUUID(), message, variant });
    setToasts(nextToastStack);
  };

  return (
    <ToastContext.Provider value={{ toasts, handleDismiss, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
