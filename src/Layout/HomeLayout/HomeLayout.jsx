import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import TopBanner from "../../Shared/TopBanner/TopBanner";
import Footer from "../../Shared/Footer/Footer";
const HomeLayout = () => {
  return (
    <>
      <div className="bg-neutral-focus">
        <div className="md:max-w-7xl w-full mx-auto px-10">
          <TopBanner />
        </div>
        <div className="border-y border-gray-600">
          <div className="md:max-w-7xl w-full mx-auto px-10">
            <Navbar />
          </div>
        </div>
      </div>

      {/* Outlet */}
      <Outlet />

      <div className="bg-neutral-focus">
        <div className="border-y border-gray-600">
          <div className="md:max-w-7xl w-full mx-auto px-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
