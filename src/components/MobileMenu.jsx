import { close } from "../assets";
import { navLinks } from "../constants";
import Logo from "./reusable/Logo";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <div className="z-20 w-screen h-screen flex flex-col bg-grey p-4 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={handleCloseMenu}>
          <img src={close} alt="close" width={36} height={36} />
        </button>
      </div>
      <nav className="relative flex-1 flex flex-col items-center justify-center gap-8">
        <div className="absolute w-1/2 h-1/4 rounded-full bg-primaryVar5 blur-[100px] -z-10" />
        {navLinks.map((link) => (
          <a key={link.id} href="" className="font-semibold">
            {link.title}
          </a>
        ))}
        <div className="flex gap-3">
          <button className="py-2 px-4 text-secondary border border-secondary text-sm font-light rounded-xl">
            Login
          </button>
          <button className="py-2 px-4 bg-primary text-sm font-light rounded-xl hover:bg-primaryVar1 focus:bg-primaryVar2">
            signup
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
