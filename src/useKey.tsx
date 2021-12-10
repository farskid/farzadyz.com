import { useCallback, useEffect } from "react";

export function useKey(code: string, fn: (e: KeyboardEvent) => void) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === code) {
        fn(e);
      }
    },
    [code, fn]
  );
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [code, handler]);

  return () => {
    window.removeEventListener("keydown", handler);
  };
}
