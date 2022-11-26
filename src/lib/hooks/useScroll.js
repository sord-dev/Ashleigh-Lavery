import { useEffect, useState } from "react";

export function useScroll() {
  const [hasScrolled, sethasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        if (hasScrolled) return;
        sethasScrolled(true);
      } else {
        sethasScrolled(false);
      }
    });
  }, [hasScrolled]);

  return hasScrolled;
}
