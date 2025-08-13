import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Preloader from "./Components/PreLoader";

export default function AppWithPreloader({ router }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Wait for initial render and a minimum time
    const timer = setTimeout(() => {
      // Use requestAnimationFrame to ensure DOM is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLoading(false);
        });
      });
    }, 3500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Preloader onComplete={() => setLoading(false)} />
  ) : (
    <RouterProvider router={router} />
  );
}
