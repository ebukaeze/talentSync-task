import star from "../assets/images/star.svg";
import avatar1 from "../assets/images/avatar1.svg";
import avatar2 from "../assets/images/avatar2.svg";
import avatar3 from "../assets/images/avatar3.svg";
import avatar4 from "../assets/images/avatar4.svg";
import avatar5 from "../assets/images/avatar5.svg";

const Reviews = () => {
  return (
    <div className="w-[327px] h-12 gap-4 mt-8">
      <div className="flex items-center justify-evenly flex-shrink-0">
        <div className="w-[152px] h-[52px] flex flex-nowrap relative items-start justify-center gap-x-4">
          <img
            src={avatar1}
            alt="avatar"
            className="w-10 h-10 absolute left-0  rounded-full border-[0.75px] opacity-75 object-contain"
          />
          <img
            src={avatar2}
            alt="avatar"
            className="w-10 h-10 absolute left-6 rounded-full border-[0.75px] opacity-75 object-contain"
          />
          <img
            src={avatar3}
            alt="avatar"
            className="w-10 h-10 absolute left-12 rounded-full border-[0.75px] opacity-75 object-contain"
          />
          <img
            src={avatar4}
            alt="avatar"
            className="w-10 h-10 absolute left-20 rounded-full border-[0.75px] opacity-75 object-contain"
          />
          <img
            src={avatar5}
            alt="avatar"
            className="w-10 h-10 absolute left-28 rounded-full border-[0.75px] opacity-75 object-contain"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <span>
              <p className="text-md font-semibold text-neutral-800">5.0</p>
            </span>
          </div>
          <p>from 3,000+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
