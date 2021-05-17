import { useEffect, useState } from "react";

export const useItemOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState();

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect;
  }, []);

  return isIntersecting;
};
