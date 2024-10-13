import { useEffect, useState, useRef } from "react";
import { useLocation } from "@remix-run/react";

export function useViewCounter() {
  const [views, setViews] = useState(0);
  const location = useLocation();
  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    const storageKey = `pageViews_${location.pathname}`;
    
    const getViewCount = () => {
      if (typeof window !== "undefined") {
        return parseInt(localStorage.getItem(storageKey) || "0");
      }
      return 0;
    };

    const incrementViewCount = () => {
      if (typeof window !== "undefined") {
        const currentViews = getViewCount();
        const newViews = currentViews + 1;
        localStorage.setItem(storageKey, newViews.toString());
        setViews(newViews);
        console.log(`View count incremented to ${newViews}`);
      }
    };

    // Set initial view count from local storage
    const initialViews = getViewCount();
    setViews(initialViews);

    // Increment the view count if it hasn't been incremented this session
    if (!hasIncrementedRef.current) {
      incrementViewCount();
      hasIncrementedRef.current = true;
    }

    // Reset the ref when the pathname changes
    return () => {
      hasIncrementedRef.current = false;
    };

  }, [location.pathname]);

  return views;
}