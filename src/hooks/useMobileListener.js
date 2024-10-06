import { useState, useEffect, useMemo } from "react";
import React from "react";

export default function useMobileListener() {
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const useMobileWidth = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobileWidth = () => setIsMobile(window.innerWidth <= 768);
      const debouncedCheck = debounce(checkMobileWidth, 200);
      checkMobileWidth();

      window.addEventListener("resize", debouncedCheck);
      return () => window.removeEventListener("resize", debouncedCheck);
    }, []);

    return isMobile;
  };

  return { useMobileWidth };
}
