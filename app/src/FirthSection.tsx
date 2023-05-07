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