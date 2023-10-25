import Typingimage from './assets/TypingImage.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {SiSkillshare} from 'react-icons/si'
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { FaCss3, FaJira } from "react-icons/fa6";
import {RiJavascriptLine} from 'react-icons/ri'
import {
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandReactNative,
  TbBrandTrello,
} from "react-icons/tb";
import {BiLogoFirebase} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
export default function ThirdSection() {
  return (
    <main className="px-5 py-4 sm634:py-5 sm634:px-8 flex flex-col lg1024:flex-row lg1024:items-center mb-10">
      <section className=" w-full">
        <p className=" font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2">
          Technologies
          <SiSkillshare className="text-[#EB4A4A] animate-spin" />
        </p>
        <LazyLoadImage
          alt="HackerImage"
          effect="blur"
          src={Typingimage}
          className=" object-contain w-full select-none -mt-3"
        />
      </section>
      <section className=" lg1024:w-[40%] w-full">
        <hr className=" my-5 border-[0.2px] lg1024:mb-11" />
        <section className="flex gap-2 flex-wrap justify-center">
          <div className="bg-gray-800 text-white font-semibold py-1  sm634:w-28 w-[45%]  px-3 flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3 ">
            <p>HTML</p>
            <AiOutlineHtml5 className="text-xl text-[#ee6026]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1  sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>CSS</p>
            <FaCss3 className="text-xl text-blue-400" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>JavaScript</p>
            <RiJavascriptLine className="text-xl text-[#ffcb01]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>TypeScript</p>
            <TbBrandTypescript className="text-xl text-blue-400" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>React Js</p>
            <TbBrandReactNative className="text-xl text-[#95ddf9]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>TailwindCss</p>
            <TbBrandTailwind className="text-xl text-blue-400" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>Github</p>
            <AiOutlineGithub className="text-xl text-[white]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>Git</p>
            <BsGit className="text-xl text-[#ee5128]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>Trello</p>
            <TbBrandTrello className="text-xl text-[#005cd7]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>Firebase</p>
            <BiLogoFirebase className="text-xl text-[#fdc928]" />
          </div>
          <div className="bg-gray-800 text-white font-semibold py-1 sm634:w-28 w-[45%] flex gap-2 items-center justify-center rounded-md text-xs lg1024:mb-3">
            <p>Jira</p>
            <FaJira className="text-xl text-[#2583fd]" />
          </div>
        </section>
      </section>
    </main>
  );
}
