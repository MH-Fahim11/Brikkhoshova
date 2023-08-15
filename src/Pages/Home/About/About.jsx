import { BsFlower3 } from "react-icons/bs";
import { FaBuildingWheat } from "react-icons/fa6";

const About = () => {
  return (
    <div className=" pt-10 pb-10 flex gap-10 px-20 font-nunito">
      <div className=" w-[1500px] ">
        {" "}
        <img src="/About.jpg" className=" rounded-lg" alt="" />
      </div>
      <div>
        <h1 className=" font-bold">About My Garden</h1>
        <h1 className=" text-[#209E2E] font-extrabold text-5xl">
          We Can Create an Environment That’s Beyond Your Imagination.
        </h1>
        <p className=" pt-5 text-[#808080] ">
          Our employees are the backbone of our company. Lawnella has an ongoing
          employee training program that includes a regular schedule of seminars
          and information updates.great explorer of the truth, the
          master-builder of human happiness. No one rejects, dislikes, or avoids
          pleasure itself, because it is pleasure.
        </p>
        <div className=" pt-5 ">
          <div className=" flex">
            <BsFlower3 className=" bg-[#209E2E] text-white text-5xl rounded-full p-1" />
            <div className=" ml-3">
              <h1 className=" font-bold text-lg">Gardening</h1>
              <p className=" text-[#808080]">Great explorer of the truth, the master-builder.</p>
            </div>
          </div>
          <div className=" flex mt-3">
            <FaBuildingWheat className=" bg-[#209E2E] text-white text-5xl rounded-full p-1" />
            <div className=" ml-3">
              <h1 className=" font-bold text-lg">Landscaping</h1>
              <p className=" text-[#808080]">Take a trivial example, which of us ever undertakes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
