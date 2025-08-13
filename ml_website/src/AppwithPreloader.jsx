import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Preloader from "./Components/PreLoader";

export default function AppWithPreloader({ router }) {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Preloader onComplete={() => setLoading(false)} />
  ) : (
    <RouterProvider router={router} />
  );
}
