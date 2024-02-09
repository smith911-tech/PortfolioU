import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ContactImg from "./assets/mask-2883635_1920.jpg";
import { MdOutlineContactMail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {GiCommercialAirplane} from 'react-icons/gi'
import {ImSpinner10} from 'react-icons/im'
export default function FifthSection() {
  const form = useRef<any>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_0v6ksim",
        "template_jx0ohji",
        form.current,
        "xnaW5a7dlypeb8J7X"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      )
      .finally(() => {
        setIsLoading(false); 
      });
  };
  return (
    <main className="px-5 py-4 sm634:py-5 sm634:px-8 mb-12">
      <p className="font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2">
        Contact
        <MdOutlineContactMail className="text-[#EB4A4A] animate-bounce" />
      </p>
      <section className="flex flex-col mt-3 gap-4 lg1024:flex-row lg1024:items-center">
        <div className="lg1024:w-[60%] w-full">
          <LazyLoadImage
            alt="HackerImage"
            effect="blur"
            src={ContactImg}
            className="w-full  object-cover brightness-50 rounded lg1024:h-[500px] select-none"
          />
        </div>
        <div className="lg1024:w-[50%]">
          <hr className=" my-5 border-[0.2px] lg1024:mb-11 border-[#ffffff88]" />
          <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-3">
            <div className="flex justify-between flex-col gap-3">
              <input
                required
                name="from_name"
                type="text"
                placeholder="Name"
                className="bg-transparent border rounded-md border-[#ffffff88] h-10 text-white px-2 py-3  w-full"
              />
              <input
                name="from_email"
                type="email"
                placeholder="Email"
                className=" bg-transparent border rounded-md border-[#ffffff88] h-10 text-white px-2 py-3 w-full"
              />
            </div>
            <textarea
              name="message"
              id=""
              rows={10}
              placeholder="Message"
              className=" bg-transparent border rounded-md border-[#ffffff88] px-2 py-3 text-white"
            ></textarea>
            <button className=" my-0 mx-auto bg-gray-800 px-7 py-2 font-medium font-sans rounded-md text-white flex items-center gap-3  overflow-hidden select-none outline-none">
              Submit
              {isLoading ? (
                <ImSpinner10 className=" animate-spin" />
              ) : (
                <GiCommercialAirplane className="animate-flying-plane" />
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
