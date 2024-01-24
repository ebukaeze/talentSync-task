import videoIcon from "../assets/images/video-record.svg";
import recordIcon from "../assets/images/recording.svg";
import calenderIcon from "../assets/images/calender.svg";
import lockIcon from "../assets/images/lock.svg";
import rectangle1 from "../assets/images/rectangle1.svg";
import handArrow from "../assets/images/handarrow.svg";
const Solutions = () => {
  return (
    <div className="w-[1280px] max-w-[1728px] h-[983px] py-24 px-40 mt-8 bg-white">
      <div className="w-[1168px] h-[184px] gap-5">
        <p className="text-blue-700 font-medium">The ClearLink Advantage</p>
        <h1 className="text-5xl font-[600]">Why choose ClearLink?</h1>
        <div className="w-[842px] h-16">
          <p className="text-gray-500 font-[400] text-2xl mt-6">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
      </div>
      <div className="flex w-[1348px] h-[527px] justify-between items-center pr-28">
        <div className="w-[700px] h-[488px] gap-2 gap-x-2 grid grid-cols-2">
          <div className="w-[300px] h-[200px] gap-4 gap-x-2 flex items-start justify-start flex-col">
            <img src={videoIcon} alt="video icon" />
            <h2 className="text-lg font-medium">Crystal-clear HD video</h2>
            <p>
              No more pixelation or blurrinessvjust stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="w-[300px] h-[200px] gap-4 flex items-start justify-start flex-col">
            <img src={recordIcon} alt="recording icon" />
            <h2 className="text-lg font-medium">Noise-canceling audio</h2>
            <p>
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div className="w-[300px] h-[200px] gap-4 flex items-start justify-start flex-col">
            <img src={calenderIcon} alt="calender icon" />
            <h2 className="text-lg font-medium">Scheduling made easy</h2>
            <p>
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div className="w-[300px] h-[200px] gap-4 flex items-start justify-start flex-col">
            <img src={lockIcon} alt="lock-unlocked icon" />
            <h2 className="text-lg font-medium">Bank grade security</h2>
            <p>
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
        <div className="relative pr-10">
          <div className="absolute -top-40">
            <img src={handArrow} alt="hand drawn arrow" />
          </div>
          <img
            src={rectangle1}
            alt="satisfied customer"
            className="w-[444px] h-[527px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
