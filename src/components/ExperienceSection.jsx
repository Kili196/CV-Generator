import Seperator from "./Seperator";

const ExperienceSection = ({ headline, experience }) => {
  function showRightExperience(element) {
    if (element.name !== "") {
      if (element.to !== "" && element.from !== "") {
        return (
          <li className="experience-card" key={element.id}>
            {element.name} from <b> {element.to} </b> until
            <b> {element.from} </b>
          </li>
        );
      }
      return (
        <li className="experience-card" key={element.id}>
          {" "}
          {element.name}{" "}
        </li>
      );
    }
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
