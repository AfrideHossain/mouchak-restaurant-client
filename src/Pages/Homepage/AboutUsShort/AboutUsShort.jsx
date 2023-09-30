import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";

const AboutUsShort = () => {
  return (
    <>
      <div className="py-10 max-w-full">
        {/* Location, opening hours and reservation mail address */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {/* Location */}
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full bg-neutral p-4 w-fit">
              <HiOutlineLocationMarker className="md:w-8 w-6 md:h-8 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Our Location</h1>
              <p className="text-base">
                Roof top, Anup Dutta New Market, Pangsha, Rajbari
              </p>
            </div>
          </div>
          {/* Open at */}
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full bg-neutral p-4 w-fit">
              <HiOutlineClock className="md:w-8 w-6 md:h-8 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Open Hours</h1>
              <p className="text-base">10:00 AM to 10:00 PM </p>
            </div>
          </div>
          {/* Reservation */}
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full bg-neutral p-4 w-fit">
              <CiViewList className="md:w-8 w-6 md:h-8 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Reservation</h1>
              <p className="text-base">asafridehossain171@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Our story */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-5 md:h-auto w-full">
          <img
            src="https://images.pexels.com/photos/418806/pexels-photo-418806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="md:max-w-xl w-full md:border-r-2 border-red-200 md:pe-5"
          />
          <div className="md:min-h-full w-full">
            <h1 className="text-2xl font-semibold">From Our Owner</h1>
            <p className="pb-5 pt-2 text-neutral text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur optio temporibus nostrum omnis. Iure corrupti velit
              nisi ipsum doloremque tempore tenetur quo dignissimos numquam
              illo, praesentium maxime labore voluptatibus, reprehenderit
              debitis dolor sunt laboriosam. Qui, sequi placeat itaque alias
              earum fuga excepturi aspernatur porro! Hic, dolore officiis
              maiores, mollitia molestias unde facilis asperiores expedita dicta
              corrupti earum eaque at libero veniam ipsa atque recusandae ea
              fugit sed, quidem odio pariatur quae excepturi eligendi. Quidem
              eos autem illum ullam ex dolores non voluptas nihil tenetur
              delectus accusantium mollitia deserunt impedit quis odit, est
              earum exercitationem esse dicta voluptatum in! Illo, corrupti.
            </p>
            {/* Owner */}
            <p className="uppercase font-medium text-neutral">Tanvir Anjum</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsShort;
