import { useState } from "react";
import { chevronDown, menu, searchIcon } from "../assets";
import { navLinks } from "../constants";
import Logo from "./reusable/Logo";
import Section from "./reusable/Section";
import MobileMenu from "./MobileMenu";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

export const headerVar = {
  visible: { y: 0, transition: { duration: 0.35, ease: "easeInOut" } },
  hidden: { y: "-100%", transition: { duration: 0.35, ease: "easeInOut" } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 350) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={headerVar}
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 bg-grey z-50 py-4 lg:py-5"
    >
      <div className="container flex justify-between">
        <div className="flex items-center gap-3 xl:gap-6 mr-6 max-lg:flex-1">
          <Logo />
          <div className="rounded-xl bg-greyLight p-2 flex gap-1 sm:flex-1">
            <img
              src={searchIcon}
              alt=""
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:max-lg:block text-xs bg-greyLight outline-none flex-1"
            />
          </div>
        </div>
        <nav className="hidden lg:flex justify-around items-center flex-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="flex items-center font-medium gap-1"
            >
              <div className="flex gap-1 flex-col items-center">
                <div className="transition-transform duration-500">
                  {link.title}
                </div>
                {link.id === 1 && (
                  <div className="w-[200%] h-2 rounded-full bg-primary bg-gradient-to-r from-primary from-30% to-secondary" />
                )}
              </div>
              {link.hasChildren && (
                <img src={chevronDown} alt="-" width={12} height={12} />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex gap-3 ml-6">
          <button className="py-2 px-4 text-secondary border border-secondary text-sm font-light rounded-xl bg-grey hover:bg-greyLight">
            Login
          </button>
          <button className="py-2 px-4 bg-primary text-sm font-light rounded-xl  hover:bg-primaryVar1 focus:bg-primaryVar2">
            signup
          </button>
        </div>
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <img src={menu} alt="menu" width={36} height={36} />
        </button>
      </div>
      {menuOpen && <MobileMenu handleCloseMenu={handleCloseMenu} />}
    </motion.header>
  );
};

export default Header;
