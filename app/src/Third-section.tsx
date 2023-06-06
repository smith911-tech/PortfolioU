import data from './Dataforport'
export default function ThirdSection() {

    return (
      <section className=" bg-[#0b0c17] pl-10 pr-10 pb-10">
        <h2 className="text-white text-xl font-extrabold mb-3">
          My Projects{" "}
          <i className="fa-solid fa-list-check  text-FirstSHeader"></i>
        </h2>
        <main className="flex w-full flex-wrap gap-9 justify-center">
          {data.map((item) => (
            <div
              className=" w-1/9 bg-[#15131d]  shadow-[#77b02e] shadow-md Max-S:w-full"
              key={item.id}
            >
              <a href={item.link}>
                <img
                  className="w-full object-contain"
                  src={item.img}
                  alt="img"
                />
                <div className="mt-4">
                  <h3 className="font-bold ml-2 text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="font-medium ml-2 text-FirstSHeader font-sans mb-4">
                    {item.desc}
                  </p>
                  <h4 className="ml-2 text-white font-semibold">
                    Technology Used{" "}
                    <i className="fa-solid fa-arrow-down-short-wide text-FirstSHeader"></i>
                  </h4>
                  <p className="text-white ml-2 font-medium mt-4 pb-2">
                    {item.languages}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </main>
        <div></div>
      </section>
    );
}