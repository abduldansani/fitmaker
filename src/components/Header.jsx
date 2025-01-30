import { useEffect, useState } from "react";
import { chevronDown, menu, searchIcon } from "../assets";
import { navLinks } from "../constants";
import Logo from "./reusable/Logo";
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

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
      className="sticky top-0 z-50 bg-grey py-4 lg:py-5"
    >
      <div className="container flex justify-between">
        <div className="mr-6 flex items-center gap-3 max-lg:flex-1 xl:gap-6">
          <Logo />
          <div className="flex gap-1 rounded-xl bg-greyLight p-2 sm:flex-1">
            <img
              src={searchIcon}
              alt=""
              width={25}
              height={25}
              className="h-[25px] w-[25px]"
            />
            <input
              type="text"
              placeholder="Search"
              className="hidden flex-1 bg-greyLight text-xs outline-none sm:max-lg:block"
            />
          </div>
        </div>
        <nav className="hidden flex-1 items-center justify-around lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="flex items-center gap-1 font-medium"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="transition-transform duration-500">
                  {link.title}
                </div>
                {link.id === 1 && (
                  <div className="h-2 w-[200%] rounded-full bg-primary bg-gradient-to-r from-primary from-30% to-secondary" />
                )}
              </div>
              {link.hasChildren && (
                <img src={chevronDown} alt="-" width={12} height={12} />
              )}
            </a>
          ))}
        </nav>
        <div className="ml-6 hidden gap-3 lg:flex">
          <button className="rounded-xl border border-secondary bg-grey px-4 py-2 text-sm font-light text-secondary hover:bg-greyLight">
            Login
          </button>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-light hover:bg-primaryVar1 focus:bg-primaryVar2">
            signup
          </button>
        </div>
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <img src={menu} alt="menu" width={36} height={36} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && <MobileMenu handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
