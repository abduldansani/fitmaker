const Section = ({ children, className }) => {
  return (
    <section
      className={`py-5 lg:py-[30px] xl:py-10 ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
