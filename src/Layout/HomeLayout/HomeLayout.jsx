import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import TopBanner from "../../Shared/TopBanner/TopBanner";
const HomeLayout = () => {
  return (
    <>
      <div className="bg-neutral-focus">
        <div className="max-w-7xl mx-auto px-10 ">
          <TopBanner />
        </div>
        <div className="border-y border-gray-600">
          <div className="max-w-7xl mx-auto px-10">
            <Navbar />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
