import { close } from "../assets";
import { navLinks } from "../constants";
import { menuVar } from "../motion/header";
import Logo from "./reusable/Logo";

import { motion } from "motion/react";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <motion.div
      variants={menuVar}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 right-0 top-0 z-20 flex h-screen w-screen flex-col bg-grey p-4"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={handleCloseMenu}>
          <img src={close} alt="close" width={36} height={36} />
        </button>
      </div>
      <nav className="relative flex flex-1 flex-col items-center justify-center gap-8">
        <div className="absolute -z-10 h-1/4 w-1/2 rounded-full bg-primaryVar5 blur-[100px]" />
        {navLinks.map((link) => (
          <a key={link.id} href="" className="font-semibold">
            {link.title}
          </a>
        ))}
        <div className="flex gap-3">
          <button className="rounded-xl border border-secondary px-4 py-2 text-sm font-light text-secondary">
            Login
          </button>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-light hover:bg-primaryVar1 focus:bg-primaryVar2">
            signup
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
