import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center py-40">
        <div className="md:w-1/2">
          <h1 className="text-gray-200 text-7xl">Wellcome to</h1>
          <h1 className="text-gray-200 text-7xl">Mouchak</h1>
          <p className="text-gray-400 text-lg my-8">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <Link
            className="btn btn-lg btn-primary rounded-none btn-outline px-8"
            to="/menu"
          >
            View Menu
          </Link>
        </div>
        <div>
          <img
            className="w-80"
            src="https://hotel-shuktara.hotels-in-dhaka.com/data/Imgs/OriginalPhoto/13734/1373445/1373445923/img-hotel-shuktara-dhaka-20.JPEG"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
