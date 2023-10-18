import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-start md:gap-0 gap-10 items-center py-40">
        <div className="md:w-1/2 w-full">
          <h1 className="text-gray-200 md:text-7xl text-4xl">Wellcome to</h1>
          <h1 className="text-gray-200 md:text-7xl text-4xl">Mouchak</h1>
          <p className="text-gray-400 md:text-lg text-base my-8">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry{"'"}s standard dummy .
          </p>
          <Link
            className="btn md:btn-lg btn-sm btn-primary rounded-none btn-outline md:px-8 leading-none"
            to="/menu"
          >
            View Menu
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            className="md:w-80 w-full"
            src="https://hotel-shuktara.hotels-in-dhaka.com/data/Imgs/OriginalPhoto/13734/1373445/1373445923/img-hotel-shuktara-dhaka-20.JPEG"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
