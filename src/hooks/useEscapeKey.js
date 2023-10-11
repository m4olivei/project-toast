import React from "react";

export default function useEscapeKey(onEscape) {
  React.useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Escape") {
        onEscape(event);
      }
    };
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onEscape]);
}
