import { Outlet } from "react-router-dom";
import '../../assets/styles/Main.css';
import Header from "../Header";
import Footer from "../Footer";

const Main = () => {
  return (
    <div className="container-fluid main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;