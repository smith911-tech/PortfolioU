import codeimg from "./Image/Computer.png";
import LineOne from "./Image/LIne-1fS.png"
export default function FirstSection() {
  return (
    <div className=" bg-gradient-to-r from-FirstSL1 to-FirstSL2 pt-5 pl-10 pr-10 pb-5">
      <header className="pb-12 flex w-full">
        <h1 className="text-lg text-white font-sans font-bold">
          Front-End
          <i className="fa-solid fa-arrow-up-short-wide text-FirstSHeader text-2xl"></i>
          Developer
        </h1>
      </header>
      <main className="relative">
        <div className="w-full flex justify-center gap-8">
          <span className=" w-2/5">
            <h1 className="text-white font-sans font-black text-3xl mt-6 mb-4">
              Welcome To Williams Joseph Portfolio
            </h1>
            <p className="text-white font-sans font-medium">
              I will be Showing Off my stacks and project that i've Worked On
            </p>
          </span>
          <img src={codeimg} alt="" className="ml-2 w-2/5" />
        </div>
        <img src={LineOne} alt="" className="absolute top-3 w-2/3 z--10"/>
      </main>
    </div>
  );
}