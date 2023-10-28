interface Props{
  activeSection: any
}
import {FaGithub} from 'react-icons/fa6'
import {FiLinkedin} from 'react-icons/fi'
import {RiTwitterXFill} from 'react-icons/ri'
import {RxCode} from 'react-icons/rx'
import {AiOutlineFileProtect} from 'react-icons/ai'
export default function Header({ activeSection }: Props) {

  return (
    <header className=" flex justify-between text-white bg-black px-5 py-4 sm634:py-5 sm634:px-8 items-center select-none sticky w-full top-0 z-50">
      <div className="hidden sm634:flex gap-3 text-sm font-semibold">
        <a
          href="#Home"
          
          className={activeSection === "Home" ? "text-[#EB4A4A]" : "text-white"}
        >
          Home
        </a>
        <a
          href="#Projects"
          
          className={
            activeSection === "Projects" ? "text-[#EB4A4A]" : "text-white"
          }
        >
          Projects
        </a>
        <a
          href="#Contact"
          
          className={
            activeSection === "Contact" ? "text-[#EB4A4A]" : "text-white"
          }
        >
          Contact
        </a>
      </div>
      <div className="text-[#EB4A4A] text-6xl">
        <RxCode />
      </div>
      <div className="flex gap-4 text-xl ">
        <a
          href="https://drive.google.com/file/d/1EaDyVprQUocKe0IHPOTn4d85Qkk5dHZv/view"
          target="blank"
        >
          <AiOutlineFileProtect className="hover:text-[#EB4A4A] duration-150" />
        </a>
        <a href="https://github.com/smith911-tech" target="blank">
          <FaGithub className="hover:text-[#EB4A4A] duration-150" />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-williams-1a7533243"
          target="blank"
        >
          <FiLinkedin className="hover:text-[#EB4A4A] duration-150" />
        </a>
        <a href="https://twitter.com/TheRealJoseph01" target="blank">
          <RiTwitterXFill className="hover:text-[#EB4A4A] duration-150" />
        </a>
      </div>
    </header>
  );
}