import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import github from "../assets/images/github.svg";
import youtube from "../assets/images/youtube.svg";
const Footer = () => {
  return (
    <div className="xl:w-[1728px] md:w-[1480px] max-w-[1728px] h-[388px] py-20 px-40">
      <div className="w-[1230px] grid xl:grid-cols-12 md:grid-cols-12 gap-28">
        <div className="flex flex-col items-start justify-start space-y-5 col-span-4">
          <img src={logo} alt="ClearLink" />
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="flex w-[800px] col-span-8 gap-x-16">
          <ul className="col-span-3 w-[25%] gap-x-5">
            <h2>Product</h2>
            <li>
              <a className="text-gray-700 text-sm">Overview</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Features</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Solutions</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Tutorials</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Pricing</a>
            </li>
            <li></li>
          </ul>
          <ul className="col-span-2 gap-5">
            <h2>Company</h2>
            <li>
              <a className="text-gray-700 text-sm">About Us</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Career</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Press</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">News</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Contact</a>
            </li>
            <li></li>
          </ul>
          <ul className="col-span-3">
            <h2>Resources</h2>
            <li>
              <a className="text-gray-700 text-sm">Blog</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Events</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Help Centre</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Tutorials</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Support</a>
            </li>
            <li></li>
          </ul>
          <ul className="col-span-1">
            <h2 className="text-lg text-gray-500">Legal</h2>
            <li>
              <a className="text-gray-700 text-sm">Terms</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Privacy</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Cookie</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">Licenses</a>
            </li>
            <li>
              <a className="text-gray-700 text-sm">contacts</a>
            </li>

            <li></li>
          </ul>
          <div className="flex flex-col items-start justify-start w-full col-span-3 gap-y-4">
            <h2 className="text-lg text-blue-700">Get the app</h2>
            <svg
              width="136"
              height="40"
              viewBox="0 0 136 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="0.5"
                width="134"
                height="39"
                rx="6.5"
                fill="black"
              />
              <rect
                x="1"
                y="0.5"
                width="134"
                height="39"
                rx="6.5"
                stroke="#A6A6A6"
              />
              <path
                d="M82.0259 19.2009V21.4919H80.5899V22.9943H82.0259V28.0993C82.0259 29.8425 82.8145 30.5397 84.7984 30.5397C85.147 30.5397 85.4791 30.4982 85.7696 30.4484V28.9626C85.5206 28.9875 85.3628 29.0041 85.0889 29.0041C84.2007 29.0041 83.8106 28.589 83.8106 27.6428V22.9943H85.7696V21.4919H83.8106V19.2009H82.0259Z"
                fill="white"
              />
              <path
                d="M90.8234 30.6642C93.4631 30.6642 95.0817 28.8962 95.0817 25.966C95.0817 23.0524 93.4548 21.2761 90.8234 21.2761C88.1838 21.2761 86.5568 23.0524 86.5568 25.966C86.5568 28.8962 88.1755 30.6642 90.8234 30.6642ZM90.8234 29.0788C89.2712 29.0788 88.3996 27.9416 88.3996 25.966C88.3996 24.007 89.2712 22.8615 90.8234 22.8615C92.3674 22.8615 93.2473 24.007 93.2473 25.966C93.2473 27.9333 92.3674 29.0788 90.8234 29.0788Z"
                fill="white"
              />
              <path
                d="M96.4666 30.4899H98.2513V25.1525C98.2513 23.8825 99.2059 23.0275 100.559 23.0275C100.874 23.0275 101.406 23.0856 101.555 23.1354V21.3757C101.364 21.3259 101.024 21.301 100.758 21.301C99.5794 21.301 98.575 21.9484 98.3177 22.8366H98.1849V21.4504H96.4666V30.4899Z"
                fill="white"
              />
              <path
                d="M105.986 22.7951C107.306 22.7951 108.169 23.7165 108.211 25.1359H103.645C103.745 23.7248 104.666 22.7951 105.986 22.7951ZM108.203 28.0495C107.871 28.7551 107.132 29.1452 106.053 29.1452C104.625 29.1452 103.704 28.1408 103.645 26.5554V26.4557H110.029V25.8332C110.029 22.9943 108.51 21.2761 105.995 21.2761C103.446 21.2761 101.828 23.1105 101.828 25.9992C101.828 28.8879 103.413 30.6642 106.003 30.6642C108.07 30.6642 109.514 29.6681 109.921 28.0495H108.203Z"
                fill="white"
              />
              <path
                d="M70.3223 27.1518C70.46 29.3715 72.3098 30.791 75.0629 30.791C78.0053 30.791 79.8464 29.3026 79.8464 26.9281C79.8464 25.0611 78.7968 24.0287 76.2502 23.435L74.8822 23.0995C73.2647 22.7209 72.6109 22.2133 72.6109 21.3272C72.6109 20.2087 73.6261 19.4774 75.1489 19.4774C76.5943 19.4774 77.5923 20.1915 77.773 21.3358H79.6486C79.5367 19.2451 77.6956 17.7739 75.1747 17.7739C72.4646 17.7739 70.6579 19.2451 70.6579 21.4562C70.6579 23.2802 71.6817 24.3642 73.9272 24.889L75.5275 25.2762C77.1707 25.6634 77.8934 26.2312 77.8934 27.1776C77.8934 28.2788 76.7578 29.0789 75.2091 29.0789C73.5487 29.0789 72.3958 28.3304 72.2323 27.1518H70.3223Z"
                fill="white"
              />
              <path
                d="M51.835 21.301C50.6065 21.301 49.544 21.9152 48.9961 22.9445H48.8633V21.4504H47.1451V33.4948H48.9297V29.1203H49.0708C49.544 30.0749 50.565 30.6393 51.8516 30.6393C54.1343 30.6393 55.587 28.8381 55.587 25.966C55.587 23.0939 54.1343 21.301 51.835 21.301ZM51.3287 29.0373C49.8345 29.0373 48.8965 27.8586 48.8965 25.9743C48.8965 24.0817 49.8345 22.903 51.337 22.903C52.8477 22.903 53.7525 24.0568 53.7525 25.966C53.7525 27.8835 52.8477 29.0373 51.3287 29.0373Z"
                fill="white"
              />
              <path
                d="M61.8318 21.301C60.6033 21.301 59.5408 21.9152 58.9929 22.9445H58.8601V21.4504H57.1419V33.4948H58.9265V29.1203H59.0676C59.5408 30.0749 60.5618 30.6393 61.8484 30.6393C64.1311 30.6393 65.5838 28.8381 65.5838 25.966C65.5838 23.0939 64.1311 21.301 61.8318 21.301ZM61.3255 29.0373C59.8313 29.0373 58.8933 27.8586 58.8933 25.9743C58.8933 24.0817 59.8313 22.903 61.3338 22.903C62.8445 22.903 63.7493 24.0568 63.7493 25.966C63.7493 27.8835 62.8445 29.0373 61.3255 29.0373Z"
                fill="white"
              />
              <path
                d="M43.9431 30.4899H45.9907L41.5083 18.075H39.4348L34.9524 30.4899H36.9312L38.0755 27.1948H42.8074L43.9431 30.4899ZM40.3726 20.3292H40.5189L42.317 25.5773H38.5659L40.3726 20.3292Z"
                fill="white"
              />
              <path
                d="M36.1511 8.71069V14.6997H38.3135C40.0981 14.6997 41.1316 13.5999 41.1316 11.6865C41.1316 9.80225 40.0898 8.71069 38.3135 8.71069H36.1511ZM37.0808 9.55737H38.2097C39.4507 9.55737 40.1853 10.3459 40.1853 11.699C40.1853 13.0728 39.4631 13.853 38.2097 13.853H37.0808V9.55737Z"
                fill="white"
              />
              <path
                d="M44.2967 14.7869C45.6165 14.7869 46.4258 13.9028 46.4258 12.4377C46.4258 10.981 45.6124 10.0928 44.2967 10.0928C42.9769 10.0928 42.1634 10.981 42.1634 12.4377C42.1634 13.9028 42.9727 14.7869 44.2967 14.7869ZM44.2967 13.9941C43.5206 13.9941 43.0848 13.4255 43.0848 12.4377C43.0848 11.4583 43.5206 10.8855 44.2967 10.8855C45.0687 10.8855 45.5086 11.4583 45.5086 12.4377C45.5086 13.4214 45.0687 13.9941 44.2967 13.9941Z"
                fill="white"
              />
              <path
                d="M53.318 10.1799H52.4256L51.6205 13.6289H51.5499L50.6202 10.1799H49.7652L48.8355 13.6289H48.7691L47.9598 10.1799H47.055L48.3001 14.6997H49.2174L50.1471 11.3711H50.2176L51.1515 14.6997H52.077L53.318 10.1799Z"
                fill="white"
              />
              <path
                d="M54.3456 14.6997H55.2379V12.0559C55.2379 11.3503 55.6571 10.9104 56.317 10.9104C56.977 10.9104 57.2924 11.2715 57.2924 11.9978V14.6997H58.1847V11.7737C58.1847 10.6987 57.6286 10.0928 56.62 10.0928C55.9394 10.0928 55.4911 10.3958 55.2711 10.8979H55.2047V10.1799H54.3456V14.6997Z"
                fill="white"
              />
              <path
                d="M59.59 14.6997H60.4824V8.41602H59.59V14.6997Z"
                fill="white"
              />
              <path
                d="M63.8384 14.7869C65.1582 14.7869 65.9675 13.9028 65.9675 12.4377C65.9675 10.981 65.1541 10.0928 63.8384 10.0928C62.5186 10.0928 61.7051 10.981 61.7051 12.4377C61.7051 13.9028 62.5144 14.7869 63.8384 14.7869ZM63.8384 13.9941C63.0623 13.9941 62.6265 13.4255 62.6265 12.4377C62.6265 11.4583 63.0623 10.8855 63.8384 10.8855C64.6104 10.8855 65.0503 11.4583 65.0503 12.4377C65.0503 13.4214 64.6104 13.9941 63.8384 13.9941Z"
                fill="white"
              />
              <path
                d="M68.6263 14.0232C68.1407 14.0232 67.7879 13.7866 67.7879 13.3799C67.7879 12.9814 68.0701 12.7698 68.6927 12.7283L69.7967 12.6577V13.0354C69.7967 13.5957 69.2986 14.0232 68.6263 14.0232ZM68.398 14.7744C68.9915 14.7744 69.4854 14.5171 69.7552 14.0647H69.8257V14.6997H70.6849V11.6118C70.6849 10.6572 70.0457 10.0928 68.9126 10.0928C67.8875 10.0928 67.157 10.5908 67.0657 11.3669H67.929C68.0286 11.0474 68.3731 10.8647 68.8711 10.8647C69.4812 10.8647 69.7967 11.1345 69.7967 11.6118V12.002L68.5723 12.0725C67.4974 12.1389 66.8914 12.6079 66.8914 13.4214C66.8914 14.2473 67.5264 14.7744 68.398 14.7744Z"
                fill="white"
              />
              <path
                d="M73.713 14.7744C74.3355 14.7744 74.8626 14.4797 75.1324 13.9858H75.203V14.6997H76.058V8.41602H75.1656V10.8979H75.0992C74.8543 10.3999 74.3314 10.1052 73.713 10.1052C72.5716 10.1052 71.837 11.01 71.837 12.4377C71.837 13.8696 72.5633 14.7744 73.713 14.7744ZM73.9662 10.9062C74.7132 10.9062 75.1822 11.4998 75.1822 12.4419C75.1822 13.3882 74.7174 13.9734 73.9662 13.9734C73.2108 13.9734 72.7584 13.3965 72.7584 12.4377C72.7584 11.4873 73.2149 10.9062 73.9662 10.9062Z"
                fill="white"
              />
              <path
                d="M81.8444 14.7869C83.1643 14.7869 83.9736 13.9028 83.9736 12.4377C83.9736 10.981 83.1601 10.0928 81.8444 10.0928C80.5246 10.0928 79.7111 10.981 79.7111 12.4377C79.7111 13.9028 80.5205 14.7869 81.8444 14.7869ZM81.8444 13.9941C81.0683 13.9941 80.6325 13.4255 80.6325 12.4377C80.6325 11.4583 81.0683 10.8855 81.8444 10.8855C82.6164 10.8855 83.0563 11.4583 83.0563 12.4377C83.0563 13.4214 82.6164 13.9941 81.8444 13.9941Z"
                fill="white"
              />
              <path
                d="M85.1548 14.6997H86.0471V12.0559C86.0471 11.3503 86.4663 10.9104 87.1262 10.9104C87.7861 10.9104 88.1016 11.2715 88.1016 11.9978V14.6997H88.9939V11.7737C88.9939 10.6987 88.4377 10.0928 87.4292 10.0928C86.7485 10.0928 86.3003 10.3958 86.0803 10.8979H86.0139V10.1799H85.1548V14.6997Z"
                fill="white"
              />
              <path
                d="M93.1036 9.05518V10.2007H92.3856V10.9519H93.1036V13.5044C93.1036 14.376 93.4979 14.7246 94.4898 14.7246C94.6642 14.7246 94.8302 14.7039 94.9754 14.679V13.936C94.8509 13.9485 94.7721 13.9568 94.6351 13.9568C94.191 13.9568 93.9959 13.7493 93.9959 13.2761V10.9519H94.9754V10.2007H93.9959V9.05518H93.1036Z"
                fill="white"
              />
              <path
                d="M96.1732 14.6997H97.0656V12.0601C97.0656 11.3752 97.4723 10.9146 98.2028 10.9146C98.8336 10.9146 99.1698 11.2798 99.1698 12.002V14.6997H100.062V11.782C100.062 10.707 99.4687 10.0969 98.5058 10.0969C97.8251 10.0969 97.3478 10.3999 97.1278 10.9062H97.0573V8.41602H96.1732V14.6997Z"
                fill="white"
              />
              <path
                d="M103.281 10.8523C103.941 10.8523 104.373 11.313 104.394 12.0227H102.111C102.161 11.3171 102.621 10.8523 103.281 10.8523ZM104.389 13.4795C104.223 13.8323 103.854 14.0273 103.314 14.0273C102.601 14.0273 102.14 13.5251 102.111 12.7324V12.6826H105.302V12.3713C105.302 10.9519 104.543 10.0928 103.285 10.0928C102.011 10.0928 101.202 11.01 101.202 12.4543C101.202 13.8987 101.995 14.7869 103.289 14.7869C104.323 14.7869 105.045 14.2888 105.248 13.4795H104.389Z"
                fill="white"
              />
              <path
                d="M25.269 20.3011C25.2907 18.6201 26.1934 17.0295 27.6256 16.149C26.7221 14.8587 25.2088 14.0406 23.6344 13.9913C21.9552 13.8151 20.3272 14.9962 19.4715 14.9962C18.5992 14.9962 17.2817 14.0088 15.863 14.038C14.0137 14.0978 12.2898 15.1491 11.3901 16.7659C9.45607 20.1143 10.8987 25.0354 12.7513 27.742C13.6782 29.0673 14.7615 30.5478 16.1789 30.4953C17.566 30.4377 18.084 29.6108 19.7583 29.6108C21.4171 29.6108 21.9031 30.4953 23.3493 30.4619C24.8377 30.4377 25.7754 29.1306 26.6698 27.7927C27.3358 26.8484 27.8483 25.8047 28.1882 24.7002C26.4391 23.9604 25.271 22.2002 25.269 20.3011Z"
                fill="white"
              />
              <path
                d="M22.5373 12.2113C23.3489 11.2371 23.7487 9.98494 23.6518 8.7207C22.412 8.85092 21.2668 9.44348 20.4443 10.3803C19.64 11.2956 19.2214 12.5258 19.3006 13.7417C20.5408 13.7545 21.7601 13.178 22.5373 12.2113Z"
                fill="white"
              />
            </svg>
            <svg
              width="136"
              height="40"
              viewBox="0 0 136 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="0.5"
                width="134"
                height="39"
                rx="4.5"
                fill="black"
              />
              <rect
                x="1"
                y="0.5"
                width="134"
                height="39"
                rx="4.5"
                stroke="#A6A6A6"
              />
              <path
                d="M68.636 21.7509C66.284 21.7509 64.367 23.5399 64.367 26.0039C64.367 28.4529 66.284 30.2569 68.636 30.2569C70.989 30.2569 72.906 28.4529 72.906 26.0039C72.905 23.5399 70.988 21.7509 68.636 21.7509ZM68.636 28.5829C67.347 28.5829 66.236 27.5199 66.236 26.0049C66.236 24.4739 67.348 23.4269 68.636 23.4269C69.925 23.4269 71.036 24.4739 71.036 26.0049C71.036 27.5189 69.925 28.5829 68.636 28.5829ZM59.322 21.7509C56.97 21.7509 55.053 23.5399 55.053 26.0039C55.053 28.4529 56.97 30.2569 59.322 30.2569C61.675 30.2569 63.592 28.4529 63.592 26.0039C63.592 23.5399 61.675 21.7509 59.322 21.7509ZM59.322 28.5829C58.033 28.5829 56.922 27.5199 56.922 26.0049C56.922 24.4739 58.034 23.4269 59.322 23.4269C60.611 23.4269 61.722 24.4739 61.722 26.0049C61.723 27.5189 60.611 28.5829 59.322 28.5829ZM48.244 23.0569V24.8609H52.562C52.433 25.8759 52.095 26.6169 51.579 27.1319C50.951 27.7599 49.968 28.4529 48.244 28.4529C45.586 28.4529 43.508 26.3099 43.508 23.6519C43.508 20.9939 45.586 18.8509 48.244 18.8509C49.678 18.8509 50.725 19.4149 51.498 20.1399L52.771 18.8669C51.691 17.8359 50.258 17.0469 48.244 17.0469C44.603 17.0469 41.542 20.0109 41.542 23.6519C41.542 27.2929 44.603 30.2569 48.244 30.2569C50.209 30.2569 51.692 29.6119 52.851 28.4039C54.043 27.2119 54.414 25.5359 54.414 24.1829C54.414 23.7649 54.382 23.3779 54.317 23.0559H48.244V23.0569ZM93.552 24.4579C93.198 23.5079 92.118 21.7509 89.911 21.7509C87.72 21.7509 85.899 23.4749 85.899 26.0039C85.899 28.3879 87.704 30.2569 90.12 30.2569C92.069 30.2569 93.197 29.0649 93.665 28.3719L92.215 27.4049C91.732 28.1139 91.071 28.5809 90.12 28.5809C89.17 28.5809 88.493 28.1459 88.058 27.2919L93.745 24.9399L93.552 24.4579ZM87.752 25.8759C87.704 24.2319 89.025 23.3949 89.976 23.3949C90.717 23.3949 91.345 23.7659 91.555 24.2969L87.752 25.8759ZM83.129 29.9999H84.997V17.4989H83.129V29.9999ZM80.067 22.7019H80.003C79.584 22.2019 78.778 21.7509 77.764 21.7509C75.637 21.7509 73.688 23.6199 73.688 26.0209C73.688 28.4049 75.637 30.2579 77.764 30.2579C78.779 30.2579 79.584 29.8069 80.003 29.2919H80.067V29.9039C80.067 31.5309 79.197 32.4009 77.796 32.4009C76.652 32.4009 75.943 31.5799 75.653 30.8869L74.026 31.5639C74.493 32.6909 75.733 34.0769 77.796 34.0769C79.987 34.0769 81.84 32.7879 81.84 29.6459V22.0099H80.068V22.7019H80.067ZM77.925 28.5829C76.636 28.5829 75.557 27.5029 75.557 26.0209C75.557 24.5219 76.636 23.4269 77.925 23.4269C79.197 23.4269 80.196 24.5219 80.196 26.0209C80.196 27.5029 79.197 28.5829 77.925 28.5829ZM102.306 17.4989H97.835V29.9999H99.7V25.2639H102.305C104.373 25.2639 106.407 23.7669 106.407 21.3819C106.407 18.9969 104.374 17.4989 102.306 17.4989ZM102.354 23.5239H99.7V19.2389H102.354C103.749 19.2389 104.541 20.3939 104.541 21.3819C104.541 22.3499 103.749 23.5239 102.354 23.5239ZM113.886 21.7289C112.535 21.7289 111.136 22.3239 110.557 23.6429L112.213 24.3339C112.567 23.6429 113.227 23.4169 113.918 23.4169C114.883 23.4169 115.864 23.9959 115.88 25.0249V25.1539C115.542 24.9609 114.818 24.6719 113.934 24.6719C112.149 24.6719 110.331 25.6529 110.331 27.4859C110.331 29.1589 111.795 30.2359 113.435 30.2359C114.689 30.2359 115.381 29.6729 115.815 29.0129H115.879V29.9779H117.681V25.1849C117.682 22.9669 116.024 21.7289 113.886 21.7289ZM113.66 28.5799C113.05 28.5799 112.197 28.2739 112.197 27.5179C112.197 26.5529 113.259 26.1829 114.176 26.1829C114.995 26.1829 115.382 26.3599 115.88 26.6009C115.735 27.7599 114.738 28.5799 113.66 28.5799ZM124.243 22.0019L122.104 27.4219H122.04L119.82 22.0019H117.81L121.139 29.5769L119.241 33.7909H121.187L126.318 22.0019H124.243ZM107.437 29.9999H109.302V17.4989H107.437V29.9999Z"
                fill="white"
              />
              <path
                d="M47.918 10.2432C47.918 11.0812 47.6701 11.7482 47.173 12.2462C46.609 12.8382 45.8731 13.1342 44.9691 13.1342C44.1031 13.1342 43.3661 12.8342 42.7611 12.2342C42.1551 11.6332 41.8521 10.8892 41.8521 10.0012C41.8521 9.11219 42.1551 8.36819 42.7611 7.76819C43.3661 7.16719 44.1031 6.86719 44.9691 6.86719C45.3991 6.86719 45.8101 6.95119 46.2001 7.11819C46.5911 7.28619 46.904 7.50919 47.1381 7.78819L46.611 8.31619C46.214 7.84119 45.667 7.60419 44.968 7.60419C44.336 7.60419 43.79 7.82619 43.329 8.27019C42.868 8.71419 42.6381 9.29119 42.6381 10.0002C42.6381 10.7092 42.868 11.2862 43.329 11.7302C43.79 12.1742 44.336 12.3962 44.968 12.3962C45.638 12.3962 46.1971 12.1732 46.6441 11.7262C46.9341 11.4352 47.102 11.0302 47.147 10.5112H44.968V9.79019H47.875C47.905 9.94719 47.918 10.0982 47.918 10.2432Z"
                fill="white"
              />
              <path
                d="M52.5281 7.73724H49.7961V9.63924H52.2601V10.3602H49.7961V12.2622H52.5281V13.0002H49.0251V7.00024H52.5281V7.73724Z"
                fill="white"
              />
              <path
                d="M55.779 13.0002H55.008V7.73724H53.332V7.00024H57.455V7.73724H55.779V13.0002Z"
                fill="white"
              />
              <path
                d="M60.438 13.0002V7.00024H61.209V13.0002H60.438Z"
                fill="white"
              />
              <path
                d="M64.6281 13.0002H63.8572V7.73724H62.1812V7.00024H66.3042V7.73724H64.6281V13.0002Z"
                fill="white"
              />
              <path
                d="M74.1089 12.2252C73.5189 12.8312 72.7859 13.1342 71.9089 13.1342C71.0319 13.1342 70.2989 12.8312 69.7099 12.2252C69.1199 11.6192 68.8259 10.8772 68.8259 10.0002C68.8259 9.12323 69.1199 8.38123 69.7099 7.77523C70.2989 7.16923 71.0319 6.86523 71.9089 6.86523C72.7809 6.86523 73.5129 7.17023 74.1049 7.77923C74.6969 8.38823 74.9929 9.12823 74.9929 10.0002C74.9929 10.8772 74.6979 11.6192 74.1089 12.2252ZM70.2789 11.7222C70.7229 12.1722 71.2659 12.3962 71.9089 12.3962C72.5519 12.3962 73.0959 12.1712 73.5389 11.7222C73.9829 11.2722 74.2059 10.6982 74.2059 10.0002C74.2059 9.30223 73.9829 8.72823 73.5389 8.27823C73.0959 7.82823 72.5519 7.60423 71.9089 7.60423C71.2659 7.60423 70.7229 7.82923 70.2789 8.27823C69.8359 8.72823 69.6129 9.30223 69.6129 10.0002C69.6129 10.6982 69.8359 11.2722 70.2789 11.7222Z"
                fill="white"
              />
              <path
                d="M76.0749 13.0002V7.00024H77.013L79.929 11.6672H79.9619L79.929 10.5112V7.00024H80.6999V13.0002H79.8949L76.844 8.10625H76.8109L76.844 9.26224V13.0002H76.0749Z"
                fill="white"
              />
              <path
                d="M47.918 10.2432C47.918 11.0812 47.6701 11.7482 47.173 12.2462C46.609 12.8382 45.8731 13.1342 44.9691 13.1342C44.1031 13.1342 43.3661 12.8342 42.7611 12.2342C42.1551 11.6332 41.8521 10.8892 41.8521 10.0012C41.8521 9.11219 42.1551 8.36819 42.7611 7.76819C43.3661 7.16719 44.1031 6.86719 44.9691 6.86719C45.3991 6.86719 45.8101 6.95119 46.2001 7.11819C46.5911 7.28619 46.904 7.50919 47.1381 7.78819L46.611 8.31619C46.214 7.84119 45.667 7.60419 44.968 7.60419C44.336 7.60419 43.79 7.82619 43.329 8.27019C42.868 8.71419 42.6381 9.29119 42.6381 10.0002C42.6381 10.7092 42.868 11.2862 43.329 11.7302C43.79 12.1742 44.336 12.3962 44.968 12.3962C45.638 12.3962 46.1971 12.1732 46.6441 11.7262C46.9341 11.4352 47.102 11.0302 47.147 10.5112H44.968V9.79019H47.875C47.905 9.94719 47.918 10.0982 47.918 10.2432Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M52.5281 7.73724H49.7961V9.63924H52.2601V10.3602H49.7961V12.2622H52.5281V13.0002H49.0251V7.00024H52.5281V7.73724Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M55.779 13.0002H55.008V7.73724H53.332V7.00024H57.455V7.73724H55.779V13.0002Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M60.438 13.0002V7.00024H61.209V13.0002H60.438Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M64.6281 13.0002H63.8572V7.73724H62.1812V7.00024H66.3042V7.73724H64.6281V13.0002Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M74.1089 12.2252C73.5189 12.8312 72.7859 13.1342 71.9089 13.1342C71.0319 13.1342 70.2989 12.8312 69.7099 12.2252C69.1199 11.6192 68.8259 10.8772 68.8259 10.0002C68.8259 9.12323 69.1199 8.38123 69.7099 7.77523C70.2989 7.16923 71.0319 6.86523 71.9089 6.86523C72.7809 6.86523 73.5129 7.17023 74.1049 7.77923C74.6969 8.38823 74.9929 9.12823 74.9929 10.0002C74.9929 10.8772 74.6979 11.6192 74.1089 12.2252ZM70.2789 11.7222C70.7229 12.1722 71.2659 12.3962 71.9089 12.3962C72.5519 12.3962 73.0959 12.1712 73.5389 11.7222C73.9829 11.2722 74.2059 10.6982 74.2059 10.0002C74.2059 9.30223 73.9829 8.72823 73.5389 8.27823C73.0959 7.82823 72.5519 7.60423 71.9089 7.60423C71.2659 7.60423 70.7229 7.82923 70.2789 8.27823C69.8359 8.72823 69.6129 9.30223 69.6129 10.0002C69.6129 10.6982 69.8359 11.2722 70.2789 11.7222Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <path
                d="M76.0749 13.0002V7.00024H77.013L79.929 11.6672H79.9619L79.929 10.5112V7.00024H80.6999V13.0002H79.8949L76.844 8.10625H76.8109L76.844 9.26224V13.0002H76.0749Z"
                stroke="white"
                stroke-width="0.2"
                stroke-miterlimit="10"
              />
              <g filter="url(#filter0_ii_2_9173)">
                <path
                  d="M10.936 7.53833C10.645 7.84633 10.473 8.32433 10.473 8.94333V31.0593C10.473 31.6793 10.645 32.1563 10.936 32.4643L11.01 32.5363L23.399 20.1473V20.0013V19.8553L11.01 7.46533L10.936 7.53833Z"
                  fill="url(#paint0_linear_2_9173)"
                />
                <path
                  d="M27.528 24.2781L23.399 20.1471V20.0011V19.8551L27.529 15.7251L27.622 15.7781L32.515 18.5581C33.912 19.3521 33.912 20.6511 32.515 21.4461L27.622 24.2261L27.528 24.2781Z"
                  fill="url(#paint1_linear_2_9173)"
                />
                <g filter="url(#filter1_i_2_9173)">
                  <path
                    d="M27.622 24.225L23.398 20.001L10.936 32.464C11.396 32.952 12.157 33.012 13.014 32.526L27.622 24.225Z"
                    fill="url(#paint2_linear_2_9173)"
                  />
                </g>
                <path
                  d="M27.622 15.7772L13.014 7.47719C12.157 6.99019 11.396 7.05119 10.936 7.53919L23.399 20.0022L27.622 15.7772Z"
                  fill="url(#paint3_linear_2_9173)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_2_9173"
                  x="10.473"
                  y="7.14111"
                  width="23.0897"
                  height="25.7207"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-0.15" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_9173"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.15" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_2_9173"
                    result="effect2_innerShadow_2_9173"
                  />
                </filter>
                <filter
                  id="filter1_i_2_9173"
                  x="10.936"
                  y="20.001"
                  width="16.686"
                  height="12.8608"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-0.15" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_9173"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_9173"
                  x1="22.3008"
                  y1="8.70933"
                  x2="5.51882"
                  y2="25.4913"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A0FF" />
                  <stop offset="0.0066" stop-color="#00A1FF" />
                  <stop offset="0.2601" stop-color="#00BEFF" />
                  <stop offset="0.5122" stop-color="#00D2FF" />
                  <stop offset="0.7604" stop-color="#00DFFF" />
                  <stop offset="1" stop-color="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_9173"
                  x1="34.3335"
                  y1="20.0011"
                  x2="10.1376"
                  y2="20.0011"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE000" />
                  <stop offset="0.4087" stop-color="#FFBD00" />
                  <stop offset="0.7754" stop-color="#FFA500" />
                  <stop offset="1" stop-color="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_9173"
                  x1="25.3281"
                  y1="22.2949"
                  x2="2.56964"
                  y2="45.0534"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF3A44" />
                  <stop offset="1" stop-color="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2_9173"
                  x1="7.79743"
                  y1="0.176989"
                  x2="17.9597"
                  y2="10.3393"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32A071" />
                  <stop offset="0.0685" stop-color="#2DA771" />
                  <stop offset="0.4762" stop-color="#15CF74" />
                  <stop offset="0.8009" stop-color="#06E775" />
                  <stop offset="1" stop-color="#00F076" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-gray-50 h-[120px]">
        <p>&copy; 2023 ClearLink. All Rights Reserved</p>
        <ul>
          <li>
            <img src={linkedin} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={github} alt="" />
          </li>
          <li>
            <img src={youtube} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
