import { useState } from "react";

const faqAnswers = [
  {
    title: "How many participants can join a ClearLink video conference?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    title: "Can I use ClearLink on multiple devices?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
  {
    title: "Is ClearLink compatible with other video conferencing platforms?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
  {
    title: "How does ClearLink ensure the security of my video conferences?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
  {
    title: "Do I need to download any software to use ClearLink?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
  {
    title: "What kind of customer support does ClearLink provide?",
    desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
];

const Faq = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div
      className="xl:w-[1728px] lg:max-w-screen-xl md:w-[1280px] md:max-w-[1728px] w-screen
       px-49 py-20 grid md:grid-cols-12 gap-5 h-[740px] space-x-6 grid-cols-1 "
    >
      <div
        className="xl:w-[547px] h-52 md:w-[350px] gap-8 space-y-5 col-span-4 
      col-start-2 px-10"
      >
        <p className="text-sm text-blue-700">Support</p>
        <h1 className="text-4xl font-semibold text-gray-900">FAQs</h1>
        <p className="text-xl font-[400]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for?{" "}
          <a className="text-gray-500 underline cursor-pointer">
            Please chat to our friendly team.
          </a>
        </p>
      </div>
      <div className="xl:w-[765px] md:w-[528px] w-screen col-span-4 gap-5 md:px-12 px-8">
        <div className="flex items-start md:px-20 px-0  flex-col justify-center">
          {faqAnswers.map((faq) => (
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              key={faq.title}
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  onClick={handleClick}
                  className="w-[560px] flex items-center justify-between p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>{faq.title}</span>
                  {show ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform origin-center transition duration-200 ease-out ${
                        show && "rotate-180"
                      }`}
                    >
                      <path
                        d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#98A2B3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        show && "rotate-180"
                      }`}
                    >
                      <path
                        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#98A2B3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className={`${
                  show || faq.title.includes("participants") ? "flex" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {faq.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
