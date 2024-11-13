import { Outlet } from "react-router-dom";
import Fotter from "../FOoter/Fotter";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-270px)]">
        <Outlet></Outlet>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default MainLayout;
