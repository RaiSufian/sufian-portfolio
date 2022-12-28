import { content } from "../content";
import { createElement } from "react";
const Skills = () => {
  const { skills } = content;
  return (
    <section className="bg-bg_light_primary">
      <div className="px-5 py-14 md:container">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex justify-center flex-wrap gap-4 ">
          {skills.skills_content.map((item, i) => (
            <div
              className="relative w-full max-w-sm bg-white flex items-center p-5 gap-4 cursor-pointer group rounded-md border-2 border-slate-200"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
            >
              <div>
                <img
                  src={item.logo}
                  className="w-14 group-hover:scale-125 duration-300"
                />
              </div>
              <div className="">
                <h6>{item.name}</h6>
                <p>{item.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
