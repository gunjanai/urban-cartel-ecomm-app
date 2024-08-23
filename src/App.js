import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/body/Header";
import Footer from "./components/body/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
