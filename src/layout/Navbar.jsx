import { useState } from "react";
import { content } from "../content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div
        className="fixed top-10 left-10 cursor-pointer z-[999] rounded-lg bg-white/40  p-2 hover:shadow-md"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <div
        className={`flex fixed  items-start gap-5 bg-slate-200/60  px-6 py-3 rounded-full backdrop-blur-md duration-700  ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => {
          return (
            <a
              href={item.link}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full cursor-pointer ${
                i == active && "bg-blue-900 text-white"
              }`}
            >
              {createElement(item.icon)}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
