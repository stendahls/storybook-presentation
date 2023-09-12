import { useEffect } from "react";


export const useKeyDown = (key: string, fn: (evt: KeyboardEvent) => void) => {
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      if (key === evt.key) {
        fn(evt);
      }
    };

    document.addEventListener("keydown", onKeyDown, { passive: true });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    }
  }, [key, fn]);
};