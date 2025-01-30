const Section = ({ children, className }) => {
  return (
    <section className={`py-8 lg:py-10 xl:py-12 ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Section;
