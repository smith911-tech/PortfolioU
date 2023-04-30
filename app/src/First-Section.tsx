import codeimg from "./Image/Computer.png";
import github from "./Image/github.png";
import vsode from "./Image/vsode.png";
import microsoft from './Image/microsoft.png'
import chrome from './Image/chrome.png'
export default function FirstSection() {
  return (
    <div className=" bg-gradient-to-b to-[#0b0c17] from-[#142d1e] pt-5 pl-10 pr-10 pb-20 relative">
      <header className="pb-12 flex w-full">
        <h1 className="text-lg text-white font-sans font-bold">
          Front-End
          <i className="fa-solid fa-arrow-up-short-wide text-FirstSHeader text-2xl"></i>
          Developer
        </h1>
      </header>
      <div className="w-full flex justify-center gap-8 relative">
        <span className=" w-2/5 z-10">
          <h1 className="text-white font-sans font-black text-3xl mt-6 mb-4">
            Welcome To Williams Joseph Portfolio
          </h1>
          <p className="text-white font-sans font-medium">
            I will be Showing Off the Technologies i use and project that i've
            Worked On.
          </p>
        </span>
        <img src={codeimg} alt="" className="ml-2 w-2/5 z-10" />
      </div>
      <div className="flex justify-center mt-7 gap-10">
        <img src={vsode} alt="" />
        <img src={chrome} alt="" />
        <img src={microsoft} alt="" />
        <img src={github} alt="" />
      </div>
    </div>
  );
}
