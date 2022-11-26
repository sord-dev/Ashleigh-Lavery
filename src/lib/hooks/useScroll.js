import { useEffect, useState } from "react";

export function useScroll() {
  const [hasScrolled, sethasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        if (hasScrolled) return;
        sethasScrolled(true);
      } else {
        sethasScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [hasScrolled]);

  return hasScrolled;
}
