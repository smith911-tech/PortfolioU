import github from "./Image/github.png";
import facebook from "./Image/facebook.png";
import linkedin from "./Image/linkedin.png";
import twitter from "./Image/twitter.png";
import whatsapp from "./Image/whatsapp.png";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FirthSection() {
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_0v6ksim",
          "emplate_jx0ohji",
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <section className="bg-gradient-to-t to-[#0b0c17] from-[#142d1e] pt-5  pb-5">
        <div className="pt-5 pb-10">
          <h2 className="text-white font-bold text-2xl  pb-3 pl-10 pr-10">
            Get in touch {""}
            <i className="fa-solid fa-headset text-FirstSHeader text-2xl"></i>
          </h2>
          <form action="" ref={form} className="flex flex-col gap-3 px-7 pb-6">
            <div className="flex gap-2 Max-S:flex-col">
              <input
                type="text"
                className="h-10 w-[50%] outline-none px-2 bg-inherit border-2 border-[#d9fe54] text-white Max-S:w-full"
                placeholder="Name"
              />
              <input
                type="email"
                name=""
                id=""
                className="h-10 w-[50%] outline-none px-2 bg-inherit border-2 border-[#d9fe54] text-white Max-S:w-full"
                placeholder="Email"
              />
            </div>
            <textarea
              placeholder="Message"
              className="outline-none px-2 bg-inherit border-2 border-[#d9fe54] text-white input py-3"
              rows={10}
            ></textarea>
            <button className="block my-0 mx-auto bg-[#d9fe54] px-7 py-2 font-medium font-sans rounded-md">
              Submit{" "}
              <i className="fa-solid fa-paper-plane fa-spin fa-spin-reverse"></i>
            </button>
          </form>
        </div>
        <h2 className="text-white font-bold text-2xl  pb-3 pl-10 pr-10">
          Contact Me {""}
          <i className="fa-solid fa-address-book text-FirstSHeader text-2xl"></i>
        </h2>
        <div className="pl-10 pr-10 bg-[#20241c] flex gap-3 justify-center pt-3 pb-3">
          <a href="https://web.facebook.com/williams.joseph.56863">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/joseph-williams-1a7533243/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://wa.link/gwermi#">
            <img src={whatsapp} alt="" />
          </a>
          <a href="https://github.com/smith911-tech">
            <img src={github} alt="" />
          </a>
          <a href="https://twitter.com/TheRealJoseph01">
            <img src={twitter} alt="" />
          </a>
        </div>
      </section>
    );
}