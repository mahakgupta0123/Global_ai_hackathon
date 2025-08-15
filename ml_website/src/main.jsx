import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Humans from "./Components/Humans.jsx";
import Partners from "./Components/Partners.jsx";
import Home from "./Components/Home.jsx";
import AppWithPreloader from "./AppwithPreloader.jsx";
import Tracks from "./Components/Tracks.jsx";
import Rules from "./Components/Rules.jsx";
import Faq from "./Components/Faq.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/humans" element={<Humans />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/rules" element={<Rules />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithPreloader router={router}>
    </AppWithPreloader>
  </StrictMode>
);
