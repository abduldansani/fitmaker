import {
  companyLinks,
  contactInfo,
  programsLinks,
  resourcesLinks,
  socialIcons,
} from "../constants";
import Logo from "./reusable/Logo";
import Section from "./reusable/Section";

const Footer = () => {
  return (
    <Section className="bg-grey">
      <div className="container flex justify-between gap-6 max-md:flex-col lg:gap-2 xl:gap-3">
        <div className="space-y-4 md:w-[37%] xl:space-y-6">
          <Logo />
          <p className="text-greyText max-md:text-xs">
            Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
            With Over <span className="text-primary">5 Years</span> of
            Experience, We Offer Expert Coaching, Tailored Workout Plans, and
            Comprehensive Nutritional Guidance.{" "}
            <span className="text-secondary">Join Our Community</span> and Start
            Your Journey Towards a Healthier, Stronger You. Ready to Make a
            Change?
          </p>
          <div className="flex items-center justify-around">
            {socialIcons.map((icon, i) => (
              <img key={i} src={icon} alt="-" />
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-around gap-1">
          <div className="space-y-6 text-center xl:space-y-9">
            <div className="text-sm font-medium text-primary xl:text-2xl xl:font-bold">
              Company
            </div>
            <div className="flex flex-col items-center gap-5 xl:gap-6">
              {companyLinks.map((link, i) => (
                <a key={i} href="#" className="text-xs text-greyText">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6 text-center xl:space-y-9">
            <div className="text-sm font-medium text-primary xl:text-2xl xl:font-bold">
              Resources
            </div>
            <div className="flex flex-col items-center gap-5 xl:gap-6">
              {resourcesLinks.map((link, i) => (
                <a key={i} href="#" className="text-xs text-greyText">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6 text-center xl:space-y-9">
            <div className="text-sm font-medium text-primary xl:text-2xl xl:font-bold">
              Programs
            </div>
            <div className="flex flex-col items-center gap-5 xl:gap-6">
              {programsLinks.map((link, i) => (
                <a key={i} href="#" className="text-xs text-greyText">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit space-y-6 xl:space-y-9">
          <div className="text-center text-sm font-medium text-secondary xl:text-2xl xl:font-bold">
            Company
          </div>
          <div className="flex flex-col gap-5 xl:gap-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-1 text-xs text-greyText"
              >
                <img src={info.icon} alt="-" />
                <div className="">{info.info}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
