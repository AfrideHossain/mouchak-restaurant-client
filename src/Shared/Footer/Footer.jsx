import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";

const Footer = () => {
  return (
    <>
      {/* footer top section */}
      <div className="h-80 flex items-center justify-center">
        <div className="w-full flex justify-between items-center">
          <div className="border-2 border-red-500 px-6 py-3">
            <p className="text-white text-xl">Call - 880 1700000000</p>
          </div>
          <div className="flex flex-col items-center site-logo">
            <h1 className="text-3xl font-extrabold tracking-wider text-primary uppercase">
              Mouchak
            </h1>
            <h3 className="text-primary text-xl font-semibold tracking-widest uppercase">
              Restaurant
            </h3>
          </div>
          <div>
            {/* Social links */}
            <ul className="text-white flex gap-10">
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
      <SectionTitle />
    </>
  );
};

export default Footer;
