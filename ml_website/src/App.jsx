import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Cursor from "./Components/Cursor";
import Preloader from "./Components/PreLoader";
import AppWithPreloader from "./AppwithPreloader";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      {/* <Cursor /> */}
      <Footer />
    </>
  );
}

export default App;
