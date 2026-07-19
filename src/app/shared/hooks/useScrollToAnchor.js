import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { removeAccents } from "app/shared/utils/globalFuntions";

const useScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = removeAccents(hash.replace("#", ""));
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);
};

export default useScrollToAnchor;
