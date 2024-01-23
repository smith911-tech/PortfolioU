import { GoProjectSymlink } from "react-icons/go";
import "react-lazy-load-image-component/src/effects/blur.css";
import bossky from "./assets/bossky.mp4";
import { GiLaptop } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import FriendVerse from './assets/FriendVerse.mp4';
export default function FourthSection() {
  return (
    <main className="px-5 py-4 sm634:py-5 sm634:px-8 mb-12">
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
