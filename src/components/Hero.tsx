import Banner from "./Banner";
import ai from "../assets/images/ai.svg";
import Reviews from "./Reviews";

const Hero = () => {
  return (
    <div
      className="w-full max-w-[1408px] flex items-start 
    justify-between h-[488px] space-y-2 p-8 flex-auto gap-x-16 -mt-12"
    >
      <div className="flex w-[100%] items-start px-4 justify-center">
        <div className="w-[64%] flex flex-col flex-wrap items-start pr-12 space-y-8 ">
          <h1 className="text-6xl font-[600]">
            Uniting the world, one video call at a time
          </h1>
          <p className="text-2xl font-[400] pr-4">
            Experience the future of communication with ClearLink where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="w-[457px] flex gap-y-5 mt-6">
            <button
              className="bg-blue-700 text-white w-56 rounded-full
            py-4 px-7 shadow-sm;
"
            >
              Start your free trial
            </button>
            <button
              className="flex gap-x-1 bg-transparent text-blue-700 w-72 rounded-full
            py-4 px-7 shadow-sm items-center justify-center
"
            >
              <img src={ai} alt="ai" className="h-4 w-4 object-contain" />
              Discover AI assistant
            </button>
          </div>
          <Reviews />
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
