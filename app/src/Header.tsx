import {FaGithub} from 'react-icons/fa6'
import {FiLinkedin} from 'react-icons/fi'
import {RiTwitterXFill} from 'react-icons/ri'
import {RxCode} from 'react-icons/rx'
export default function Header() {
    return (
      <header className=" flex justify-between text-white bg-black px-5 py-4 sm634:py-5 sm634:px-8 items-center select-none sticky w-full top-0 z-50">
        <div className="hidden sm634:flex gap-3 text-sm font-semibold">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
        </div>
        <div className="text-[#EB4A4A] text-6xl">
          <RxCode />
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/smith911-tech" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-williams-1a7533243"
            target="blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/TheRealJoseph01" target="blank">
            <RiTwitterXFill />
          </a>
        </div>
      </header>
    );
}