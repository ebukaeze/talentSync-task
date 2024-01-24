import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";

const Header = () => {
  return (
    <header
      className="max-w-[1472px] w-full mx-auto bg-headerBg h-[868px]
     bg-center bg-cover"
    >
      <div className="w-[100%] max-w-[1472px] padding: 40px 128px 96px 128px; pt-10 px-32 pb-24">
        <Navbar />
      </div>
      <div className="w-full flex items-center justify-center max-w-[1408px] mx-auto px-16">
        <Hero />
      </div>
      <SocialProof />
    </header>
  );
};

export default Header;
