import Seperator from "./Seperator";

const ExperienceSection = ({ headline, experience }) => {
  function showRightExperience(element) {
    console.log(element.to);
    if (element.to != "" && element.from != "") {
      return (
        <li className="experience-card">
          {element.name} from <b> {element.to} </b> until
          <b> {element.from} </b>
        </li>
      );
    }
    return <li className="experience-card"> {element.name} </li>;
  }

  return (
    <section>
      <h1>
        <em> {headline} </em>
      </h1>
      <Seperator />
      <div className="padding-left-1em ">
        {experience.map((element) => {
          return showRightExperience(element);
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
