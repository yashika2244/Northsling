import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Wait for next frame + small delay for content to render
    const id = requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 50); // 50ms delay ensures layout is ready
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
