import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";

const Footer = () => {
  return (
    <>
      {/* footer top section */}
      <div className="h-80 flex items-center justify-center">
        <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="border-2 border-red-500 md:px-6 md:py-3 p-3">
            <p className="text-white md:text-xl text-base">
              Call - 880 1700000000
            </p>
          </div>
          <div className="flex flex-col items-center site-logo">
            <h1 className="md:text-3xl text-2xl font-extrabold tracking-widest text-primary uppercase">
              Mouchak
            </h1>
            <h3 className="text-primary md:text-xl text-lg font-semibold tracking-widest uppercase">
              Restaurant
            </h3>
          </div>
          <div>
            {/* Social links */}
            <ul className="flex items-center md:gap-10 gap-10 text-white">
              <li>
                <a href="https://facebook.com">
                  <BsFacebook size="24px" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <BsInstagram size="24px" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <BsYoutube size="24px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Address and timing section */}
      <div className="w-full text-white grid md:grid-cols-3 gap-5 pb-8">
        <div className="flex flex-col items-start">
          <SectionTitle title={"Contact"} size={"sm"} />
          <div className="mt-5 space-y-3">
            {/* road address */}
            <p>Roof top, Anup Dutta New Market, Pangsha, Rajbari</p>
            <p>
              <span className="text-red-500">Call </span>- +880 1700000000
            </p>
            <p className="text-red-500">asafridehossain171@gmail.com</p>
          </div>
        </div>
        {/* Feedback section */}
        <div className="flex flex-col items-start md:items-center md:px-5">
          <p className="text-center">
            Give a feedback and help us to improve our services
          </p>
          <div className="w-full flex justify-between items-center mt-5">
            <input
              className="input rounded-none bg-transparent flex-grow border-gray-500"
              type="text"
              name="feedback"
              id="feedback"
            />
            <button className="btn rounded-none normal-case px-6 text-base leading-none">
              Feedback
            </button>
          </div>
        </div>
        {/* Timing section */}
        <div className="flex flex-col items-start md:items-end md:ps-5">
          <SectionTitle title={"Working Time"} size={"sm"} />
          <div className="mt-5 text-left md:text-right space-y-3">
            {/* road address */}
            <p>
              <span className="text-red-500">Mon - Fri</span>: 10:00am - 10:00pm
            </p>
            <p>
              <span className="text-red-500">Sat</span>: 10:00am - 10:00pm
            </p>
            <p>
              <span className="text-red-500">Sun</span>: 10:00am - 10:00pm
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
