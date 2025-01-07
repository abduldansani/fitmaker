import { chevronDown, menu, searchIcon } from "../assets";
import { navLinks } from "../constants";
import Logo from "./reusable/Logo";
import Section from "./reusable/Section";

const Header = () => {
  return (
    <Section>
      <header className="container -mt-2 xl:-mt-5 flex justify-between">
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
              className="hidden sm:max-lg:block text-xs bg-transparent outline-none flex-1"
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
              <div className="group flex gap-1 flex-col items-center">
                <div className="transition-transform duration-500">
                  {link.title}
                </div>
                <div className="hidden group-hover:block w-[200%] h-2 rounded-full bg-primary bg-gradient-to-r from-primary from-30% to-secondary"></div>
              </div>
              {link.hasChildren && (
                <img src={chevronDown} alt="-" width={12} height={12} />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex gap-3 ml-6">
          <button className="py-2 px-4 text-secondary border border-secondary text-sm font-light rounded-xl">
            Login
          </button>
          <button className="py-2 px-4 bg-primary text-sm font-light rounded-xl">
            signup
          </button>
        </div>
        <button className="lg:hidden">
          <img src={menu} alt="-" width={36} height={36} />
        </button>
      </header>
    </Section>
  );
};

export default Header;
