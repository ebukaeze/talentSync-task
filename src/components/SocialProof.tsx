import shopify from "../assets/images/shopify.svg";
import coinbase from "../assets/images/coinbase.svg";
import dropbox from "../assets/images/dropbox.svg";
import intercom from "../assets/images/intercom.svg";
import marvel from "../assets/images/marvel.svg";
import automatic from "../assets/images/automatic.svg";

const SocialProof = () => {
  return (
    <div className="relative w-[1472px] max-w-[1728px] py-24 px-0 h-[313px] bg-white">
      <div className="w-[1436px] h-[121px] flex flex-col items-center justify-center gap-12 py-0 px-40">
        <p>
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="flex w-[1371.83px] items-center justify-evenly px-14">
          <img
            src={shopify}
            alt="shopify"
            className="w-[151.56px] h-[43px] object-contain"
          />
          <img
            src={coinbase}
            alt="coinbase"
            className="w-[151.56px] h-[43px] object-contain"
          />
          <img
            src={dropbox}
            alt="coinbase"
            className="w-[151.56px] h-[43px] object-contain"
          />
          <img
            src={intercom}
            alt="intercom"
            className="w-[151.56px] h-[43px] object-contain"
          />
          <img
            src={marvel}
            alt="marvel"
            className="w-[151.56px] h-[43px] object-contain"
          />
          <img
            src={automatic}
            alt="automatic"
            className="w-[151.56px] h-[43px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
