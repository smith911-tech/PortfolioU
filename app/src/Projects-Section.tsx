import { GoProjectSymlink } from "react-icons/go";
import "react-lazy-load-image-component/src/effects/blur.css";
import bossky from "./assets/bossky.mp4";
import { GiLaptop } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import FriendVerse from "./assets/FriendVerse.mp4";
import Edovision from "./assets/Edovision.mp4";
import { GrProductHunt } from "react-icons/gr";
import writecap from "./assets/Writecap.mp4";
import { FaTools } from "react-icons/fa";
import PricingCal from "./assets/PricingCal.webp";
import { RiGovernmentFill } from "react-icons/ri";
export default function ProjectsSection() {
  return (
    <main className="px-5 py-4 sm634:py-5 sm634:px-8 mb-12">
      <section className=" mb-12">
        <div className="font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2 justify-center">
          Saas Products
          <GrProductHunt className="text-[#EB4A4A] animate-pulse" />
        </div>
        <p className="text-xs text-[#EB4A4A] text-center font-Belanosima">
          Check out my Saas products:
        </p>
        <div className="flex justify-center mt-6 gap-10 flex-wrap">
          <section className=" w-full min-[500px]:w-[450px] bg-black  rounded-xl shadow-box relative">
            <video autoPlay muted loop className="w-full h-64 object-contain">
              <source src={writecap} type="video/mp4" />
            </video>
            <div className=" px-4 pb-2 mt-2">
              <div className="text-white font-Belanosima">WriteCap</div>
              <p className="text-[#ffffffb7] text-[12px] mt-2">
                Explore WriteCap, a SaaS product designed to generate engaging
                captions for social media posts, catering to both personal and
                business needs. Our specialized business targets include real
                estate, fashion and beauty, and event planning and management.
              </p>
              <div className="flex mt-6 justify-between">
                <a
                  target="blank"
                  href="https://www.writecap.co/"
                  className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
                >
                  <p className="text-[12px] font-Belanosima font-semibold">
                    Live site
                  </p>
                  <GiLaptop className="text-[#EB4A4A]" />
                </a>
                <a
                  target="blank"
                  href="https://github.com/Write-Cap"
                  className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
                >
                  <p className="text-[12px] font-Belanosima font-semibold">
                    Github
                  </p>
                  <LiaLaptopCodeSolid className="text-[#EB4A4A]" />
                </a>
              </div>
            </div>
            <div className=" absolute px-3 py-1 bg-[#EB4A4A] rounded-lg shadow-xl top-2 right-1 text-white font-semibold">
              Acquired($)
            </div>
          </section>
        </div>
      </section>
      <section className=" mb-12">
        <div className="font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2 justify-center">
          Tools
          <FaTools className="text-[#EB4A4A] animate-pulse" />
        </div>
        <p className="text-xs text-[#EB4A4A] text-center font-Belanosima">
          Tools that I've built:
        </p>
        <div className="flex justify-center mt-6 gap-10 flex-wrap">
          <section className=" w-full min-[500px]:w-[450px] bg-black  rounded-xl shadow-box relative">
            <img
              src={PricingCal}
              alt="Pricing Cal"
              className="w-full h-64 object-contain"
            />
            <div className=" px-4 pb-2 mt-2">
              <p className="text-white font-Belanosima ">Pricing Cal</p>
              <p className="text-[#ffffffb7] text-[12px] mt-2">
                This is a tool that i built to help indie hacker and startup
                calculate there pricing for there product/Saas, it helps
                calculate in monthly and yearly pricing.
              </p>
              <div className="flex mt-6 justify-between">
                <a
                  target="blank"
                  href="https://writecap.co/tools/pricing-calculator/"
                  className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
                >
                  <p className="text-[12px] font-Belanosima font-semibold">
                    Live site
                  </p>
                  <GiLaptop className="text-[#EB4A4A]" />
                </a>
              </div>
            </div>
            <div className=" absolute px-3 py-1 bg-[#EB4A4A] rounded-lg shadow-xl top-2 right-1 text-white font-semibold">
              Acquired($) with WriteCap
            </div>
          </section>
        </div>
      </section>
      <section className=" mb-12">
        <div className="font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2 justify-center">
          NGO Projects
          <RiGovernmentFill className="text-[#EB4A4A] animate-pulse" />
        </div>
        <p className="text-xs text-[#EB4A4A] text-center font-Belanosima">
          Projects that I've built for non-profit organizations:
        </p>
        <div className="flex justify-center mt-6 gap-10 flex-wrap">
          <section className=" w-full min-[500px]:w-[450px] bg-black  rounded-xl shadow-box ">
            <video autoPlay muted loop className="w-full h-64 object-contain">
              <source src={Edovision} type="video/mp4" />
            </video>
            <div className=" px-4 pb-2 mt-2">
              <p className="text-white font-Belanosima ">Edo Vision</p>
              <p className="text-[#ffffffb7] text-[12px] mt-2">
                This is a voluteer project that I built for a non-profit
                organization in Nigeria. The website is a platform for the
                organization to showcase their work and accept donations.
              </p>
              <div className="flex mt-6 justify-between">
                <a
                  target="blank"
                  href="https://www.edovision.org/"
                  className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
                >
                  <p className="text-[12px] font-Belanosima font-semibold">
                    Live site
                  </p>
                  <GiLaptop className="text-[#EB4A4A]" />
                </a>
                <a
                  target="blank"
                  href="https://github.com/smith911-tech/edo-vision"
                  className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
                >
                  <p className="text-[12px] font-Belanosima font-semibold">
                    Live Code
                  </p>
                  <LiaLaptopCodeSolid className="text-[#EB4A4A]" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
      <p className=" font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2 justify-center">
        Projects
        <GoProjectSymlink className="text-[#EB4A4A] animate-pulse" />
      </p>
      <p className=" text-xs text-[#EB4A4A] text-center font-Belanosima">
        These are projects that I've personally built and collaborated on:
      </p>
      <div className="flex justify-center mt-6 gap-10 flex-wrap">
        <section className=" w-full min-[500px]:w-[450px] bg-black  rounded-xl shadow-box ">
          <video autoPlay muted loop className="w-full h-64 object-contain">
            <source src={bossky} type="video/mp4" />
          </video>
          <div className=" px-4 pb-2 mt-2">
            <p className="text-white font-Belanosima ">Boossky</p>
            <p className="text-[#ffffffb7] text-[12px] mt-2">
              This website offers a range of services including hair salon, skin
              care, massage, and more in kenya. this is a collaborative project.
            </p>
            <div className="flex mt-6 justify-between">
              <a
                target="blank"
                href="https://bookssy.vercel.app/"
                className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
              >
                <p className="text-[12px] font-Belanosima font-semibold">
                  Live site
                </p>
                <GiLaptop className="text-[#EB4A4A]" />
              </a>
              <a
                target="blank"
                href="https://github.com/smith911-tech/bookssy"
                className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
              >
                <p className="text-[12px] font-Belanosima font-semibold">
                  Live Code
                </p>
                <LiaLaptopCodeSolid className="text-[#EB4A4A]" />
              </a>
            </div>
          </div>
        </section>
        <section className=" w-full min-[500px]:w-[450px] bg-black  rounded-xl shadow-box ">
          <video autoPlay muted loop className="w-full h-64 object-contain">
            <source src={FriendVerse} type="video/mp4" />
          </video>
          <div className=" px-4 pb-2 mt-2">
            <p className="text-white font-Belanosima ">FriendVerse</p>
            <p className="text-[#ffffffb7] text-[12px] mt-2">
              This social media web app allows you to post, share, comment, and
              like posts and comments, users can also verify there account.
            </p>
            <div className="flex mt-6 justify-between">
              <a
                target="blank"
                href="https://friend-verse.vercel.app/"
                className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
              >
                <p className="text-[12px] font-Belanosima font-semibold">
                  Live site
                </p>
                <GiLaptop className="text-[#EB4A4A]" />
              </a>
              <a
                target="blank"
                href="https://github.com/Friend-Verse"
                className="text-[white] flex gap-2 border p-2 rounded-md shadow-box"
              >
                <p className="text-[12px] font-Belanosima font-semibold">
                  Live Code
                </p>
                <LiaLaptopCodeSolid className="text-[#EB4A4A]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
