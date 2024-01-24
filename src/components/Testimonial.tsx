import shopifyIcon from "../assets/images/shopify.svg";
import starIcon from "../assets/images/star.svg";
import avatar10 from "../assets/images/avatar10.svg";
import testArrowLeft from "../assets/images/testarrowleft.svg";
import testArrowRight from "../assets/images/testarrowright.svg";
import testImage1 from "../assets/images/testImage1.svg";
import testImage2 from "../assets/images/testImage2.svg";
import testImage3 from "../assets/images/testImage3.svg";
import testImage4 from "../assets/images/testImage4.svg";
import testImage5 from "../assets/images/testImage5.svg";
const Testimonial = () => {
  return (
    <div className="bg-gray-50 w-full max-w-[1728px] gap-16 py-24 h-[748px]">
      <div className="w-[1278px] max-w-[1728px] mx-auto flex items-start justify-center h-[556px] gap-4 px-10">
        <div className="flex items-start flex-col w-[640px] justify-around space-y-6">
          <img
            src={shopifyIcon}
            alt="Ahopify icon"
            className="w-[112px] h-8 object-contain"
          />
          <div className="flex gap-1 items-center">
            <img src={starIcon} alt="rating star" />
            <img
              src={starIcon}
              alt="rating star"
              className="border-green-500 border"
            />
            <img src={starIcon} alt="rating star" />
            <img src={starIcon} alt="rating star" />
            <img src={starIcon} alt="rating star" />
          </div>

          <div className="w-[420px] h-[230px] flex items-start">
            <h1 className="text-3xl font-[600] text-gray-900">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </h1>
          </div>
          <div className="w-[640px] h-[60px] flex items-start justify-between gap-3 ">
            <div className="flex items-centeer justify-evenly gap-x-4">
              <img src={avatar10} alt="testemonial photo" />
              <div className="flex flex-col items-start">
                <h2 className="text-lg font-medium">Serah Thompson</h2>
                <p>Project Manager, shopify</p>
              </div>
            </div>
            <div className="w-[144px] flex justify-around items-center">
              <button>
                <img src={testArrowLeft} alt="left arrow" />
              </button>
              <button>
                <img src={testArrowRight} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[640px] h-[496px]">
          <div className="grid grid-cols-4 gap-3 items-center justify-evenly">
            <div className="flex justify-center gap-3 items-end cols-span-2 col-start-2">
              <img src={testImage1} alt="" />
              <img
                src={testImage5}
                alt=""
                className="border-2 border-green-500"
              />
            </div>
            <div className="grid grid-cols-subgrid col-span-3 gap-3">
              <img src={testImage3} alt="" />
              <img src={testImage2} alt="" />
              <img src={testImage4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
