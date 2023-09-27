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
      <SectionTitle title={"Contact us"} size={"base"} />
    </>
  );
};

export default Footer;
