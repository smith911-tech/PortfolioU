import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HackerImage from './assets/HackerImage.png'
import {HiOutlinePlusSm} from 'react-icons/hi'
export default function SecondSection() {
  return (
    <section className=" mt-5 px-5 py-4 sm634:py-5 sm634:px-8 flex">
      <div className=" w-[100%] lg1200:w-[50%]">
        <p className=" text-lg font-medium text-white">Hey there,</p>
        <h2 className="font-medium text-white text-[40px]">
          I'm Joseph williams
        </h2>
        <p className="text-lg font-medium text-[#EB4A4A]">- Web Developer</p>
        <p className=" text-xs text-[white] mt-2 font-medium  mb-2 leading-5">
          I am a web developer based in Abuja, Nigeria, specializing in the
          creation of responsive and user-friendly websites that effectively
          convey the essence of my clients' or employers' brands. With over a
          year of experience in the industry, I have collaborated with a diverse
          group of developers on various projects, including personal endeavors.
          My deep interest in the transformative power of technology to address
          problems and improve people's lives inspired me to undertake several
          web development courses.
        </p>
        <a className=" select-none" href="mailto:JosephPay911@gmail.com">
          <button className=" mt-5 bg-[#EB4A4A] py-2 px-6 text-white font-bold rounded-md">
            Get in touch
          </button>
        </a>
      </div>
      <div className=" -mt-10 lg1024:block hidden w-[100%]">
           <LazyLoadImage
           alt="HackerImage"
           effect="blur"
           src={HackerImage}
           className="object-cover h-96 w-full select-none"
         />
      </div>
      <div className="hidden sm634:flex w-[50%] ml-3 flex-col items-end lg1024:hidden lg1200:flex lg1200:w-[20%]">
        <p className=" text-[50px] text-[white] flex items-center">
          1 <HiOutlinePlusSm className="text-[#EB4A4A]" />
        </p>
        <p className=" text-xs text-white -mt-2 font-medium">
          Years of experience
        </p>
        <p className=" text-[50px] text-[white] flex items-center mt-2">
          20 <HiOutlinePlusSm className="text-[#EB4A4A]" />
        </p>
        <p className=" text-xs text-white -mt-2 font-medium">
          Completed projects
        </p>
        <p className=" text-[50px] text-[white] flex items-center mt-2">
          34 <HiOutlinePlusSm className="text-[#EB4A4A]" />
        </p>
        <p className=" text-xs text-white -mt-2 font-medium">
          Contributed Projects
        </p>
      </div>
    </section>
  );
}

