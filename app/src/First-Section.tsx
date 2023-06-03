import codeimg from "./Image/Computer.png";
import canva from "./Image/canva.png";
import vsode from "./Image/vsode.png";
import microsoft from './Image/microsoft.png'
import edge from './Image/edge.png'
export default function FirstSection() {
  return (
    <div className=" bg-gradient-to-b to-[#0b0c17] from-[#142d1e] pt-5 pl-10 pr-10 pb-20 relative">
      <header className="pb-12 flex w-full ">
        <h1 className="text-lg text-white font-sans font-bold Max-S:text-sm">
          Front-End
          <i className="fa-solid fa-arrow-up-short-wide text-FirstSHeader text-2xl"></i>
          Developer
        </h1>
        {"  "}
        <button className="ml-4 text-white font-semibold border border-FirstSHeader pl-2 pr-2 Max-S:text-sm">
          <a href="https://drive.google.com/file/d/1EaDyVprQUocKe0IHPOTn4d85Qkk5dHZv/view">
            Cv / Resume{" "}
          </a>
        </button>
      </header>
      <div className="w-full flex justify-center gap-8 relative">
        <span className=" w-2/5 z-10 Max-S:w-full">
          <h1 className="text-white font-sans font-black text-3xl mt-6 mb-4">
            Welcome To Williams Joseph Portfolio
          </h1>
          <p className="text-white font-sans font-medium">
            I will be Showing Off the Technologies i use and project that i've
            Worked On.
          </p>
          <img
            className=" mt-5"
            src="https://readme-typing-svg.herokuapp.com?font=Helvetica&size=28&duration=6500&color=d9fe54&center=true&vCenter=true&width=450&lines=Frontend+Developer...+;Building!+Learning!+%F0%9F%92%A1"
          />
        </span>
        <img src={codeimg} alt="" className="ml-2 w-2/5 z-10 Max-S:hidden" />
      </div>
      <div className="flex justify-center mt-7 gap-10">
        <img src={vsode} alt="" />
        <img src={edge} alt="" />
        <img src={microsoft} alt="" />
        <img src={canva} alt="" />
      </div>
    </div>
  );
}
