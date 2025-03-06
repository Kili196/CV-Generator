import Seperator from "./Seperator";

const AboutMeSection = ({ headline, desc }) => {
  return (
    <section>
      <h1>
        <em> {headline} </em>
      </h1>
      <Seperator />

      <div className="about-me-section"> {desc}</div>
    </section>
  );
};

export default AboutMeSection;
