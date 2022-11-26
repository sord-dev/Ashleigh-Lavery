import { useEffect, useState } from "react";

export function useScroll() {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          if (state) return;
          setState(true);
        }else {
            setState(false);
        }
      });
  }, [state]);

  return state;
}
