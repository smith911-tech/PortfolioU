import github from "./Image/github.png";
import facebook from "./Image/facebook.png";
import linkedin from "./Image/linkedin.png";
import twitter from "./Image/twitter.png";
import whatsapp from "./Image/whatsapp.png";

export default function FirthSection() {
    return (
      <section className="bg-gradient-to-t to-[#0b0c17] from-[#142d1e] pt-5  pb-5">
        <div className="pt-5 ">
          <h2 className="text-white font-bold text-2xl  pb-3 pl-10 pr-10">
            Latest Tweet {""}
            <i className="fa-brands fa-twitter text-FirstSHeader text-2xl"></i>
          </h2>
          <img
            className="block mx-auto my-0"
            src="https://gtce.itsvg.in/api?username=TheRealJoseph01&border=false&theme=vision-friendly-dark"
          />
        </div>
        <h2 className="pt-5 text-white font-bold text-2xl  pb-3 pl-10 pr-10">
          Contact Me {""}
          <i className="fa-solid fa-address-book text-FirstSHeader text-2xl"></i>
        </h2>
        <div className="pl-10 pr-10 bg-[#20241c] flex gap-3 justify-center pt-3 pb-3">
          <a href="https://facebook.com/williams.joseph.56863">
            <img
              src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white"
              alt=""
            />
          </a>
          <a href="https://instagram.com/therealjoseph001">
            <img
              src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white"
              alt=""
            />
          </a>
        </div>
      </section>
    );
}