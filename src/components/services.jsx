import { content } from "../content";
const Services = () => {
  const { services } = content;
  return (
    <section id="service">
      <div className="md:container  px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 flex-wrap justify-between  group">
          {services.service_content.map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] p-6 duration-300 bg-bg_light_primary border-2 rounded-lg border-slate-200 flex-1 text-center group-hover:blur-sm hover:!blur-none"
              key="index"
            >
              <img src={item.logo} className="mx-auto" />
              <h6 className="my-3">{item?.title}</h6>
              <p className="leading-7">{item?.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
