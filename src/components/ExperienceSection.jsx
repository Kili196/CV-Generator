import Seperator from "./Seperator";

const ExperienceSection = ({ headline, experience }) => {
  return (
    <section>
      <h1>
        <em> {headline} </em>
      </h1>
      <Seperator />
      <div className="padding-left-1em ">
        {experience.map((element) => {
          return (
            <li className="experience-card">
              {element.name} to{" "}
              {element.to && new Date(element.to).toLocaleDateString("en-GB")}{" "}
              until{" "}
              {element.from &&
                new Date(element.from).toLocaleDateString("en-GB")}{" "}
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
