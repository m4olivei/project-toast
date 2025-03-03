import React from "react";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    toasts.length > 0 && (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
      >
        {toasts.map(({ id, variant, message }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast key={id} id={id} variant={variant}>
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    )
  );
}

export default ToastShelf;
