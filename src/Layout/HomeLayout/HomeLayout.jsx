import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import TopBanner from "../../Shared/TopBanner/TopBanner";
const HomeLayout = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
