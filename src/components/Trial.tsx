import checkIcon from "../assets/images/checkIcon.svg";
import mockup from "../assets/images/mockup.svg";

const Trial = () => {
  return (
    <section className="relative xl:w-[1728px] md:w-screen  md:max-w-[1438px] w-screen h-[697px] py-20 pl-40">
      <div className="w-full flex items-start justify-between gap-16">
        <div className="flex xl:w-[579px] md:w-[400px] flex-col items-start justify-start space-y-10">
          <h1 className="text-3xl font-medium">
            Ready to clear the path to perfect communication?
          </h1>
          <ul className="flex flex-col w-full items-start space-y-5">
            <li className="flex gap-x-3 items-start justify-start w-full">
              <img src={checkIcon} alt="" />
              <p>30 days free trial</p>
            </li>
            <li className="flex gap-x-3 items-start justify-start w-full">
              <img src={checkIcon} alt="" />
              <p>Cancel at any time</p>
            </li>
            <li className="flex gap-x-3 items-start justify-start w-full">
              <img src={checkIcon} alt="" />
              <p>Acess to all features</p>
            </li>
            <li className="flex gap-x-3 items-start justify-start w-full">
              <img src={checkIcon} alt="" />
              <p>Personalized onboarding</p>
            </li>
          </ul>
          <div className="flex items-start justify-start w-full gap-x-4 mt-5">
            <button
              className="w-36 h-14 border border-gray-400 shadow-sm py-3 px-6 
            rounded-full bg-white gap-2"
            >
              talk to sales
            </button>
            <button
              className="w-max h-14 border border-gray-400 shadow-sm py-3 px-6 
            rounded-full bg-blue-700 text-white"
            >
              start your free trial
            </button>
          </div>
        </div>
        <div className="w-full flex items-end justify-end xl:w-[1024px] md:w-[600px] relative h-[570px]">
          <img
            src={mockup}
            alt=""
            className="object-contain xl:w-[1024px] md:w-[550px] h-[550px] absolute -right-[76px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Trial;
