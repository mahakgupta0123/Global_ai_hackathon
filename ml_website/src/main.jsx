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
import Mentor from "./Components/Mentor.jsx";
import AiBuild from "./Components/AiBuild.jsx";
import Home from "./Components/Home.jsx";
import LeaderBoard from "./Components/LeaderBoard.jsx";
import AppWithPreloader from "./AppwithPreloader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/humans" element={<Humans />} />
      <Route path="/mentors" element={<Mentor />} />
      <Route path="/buildathon" element={<AiBuild />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithPreloader router={router}>
    </AppWithPreloader>
  </StrictMode>
);
