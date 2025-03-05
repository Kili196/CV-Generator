import Seperator from "./Seperator";

const ExperienceSection = ({ headline, experience }) => {
  return (
    <section>
      <h1>
        <em> {headline} </em>
      </h1>
      <Seperator />
      <div className="padding-left-1em">{experience.map((element) => {})}</div>
    </section>
  );
};

export default ExperienceSection;
