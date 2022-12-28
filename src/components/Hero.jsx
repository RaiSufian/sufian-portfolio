import { content } from "../content";
const Hero = () => {
  const { hero } = content;
  return (
    <>
      <section id="home" className="overflow-hidden">
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          <div
            className="absolute  h-full md:w-4/12 w-8/12 bg-primaryLinear bottom-0 -z-10 top-0 right-0"
            data-aos="slide-left"
            data-aos-delay="1200"
          >
            <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] text-6xl font-bold">
              {hero.firstName}
              <span className="text-dark_primary">{hero.LastName}</span>
            </h1>
          </div>
          <div className="pb-16 px-6 pt-5" data-aos="fade-down">
            <h2 className="">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <button className="btn">
                {hero.btnText}
              </button>
            </div>
            <br />
            <div className="flex flex-col">
              {hero.hero_content.map((content, index) => (
                <>
                  <div
                    className={`flex items-center w-100 gap-5 ${
                      index === 1 && "flex-row-reverse text-right"
                    }`}
                  >
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="md:h-[37rem] h-96">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
