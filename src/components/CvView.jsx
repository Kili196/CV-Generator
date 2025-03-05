import ExperienceSection from "./ExperienceSection";
import HeaderDetails from "./HeaderDetails";

const CvView = ({ user }) => {
  return (
    <div className="cv-view flex-center">
      <div className="cv-container">
        <header>
          <HeaderDetails user={user} />
          <img src="/public/profile-picture-placeholder.png" />
        </header>

        <main>
          {user.schools.length != 0 && (
            <ExperienceSection headline={"School"} experience={user.schools} />
          )}
          {user.works.length != 0 && (
            <ExperienceSection headline={"Works"} experience={user.works} />
          )}
        </main>
      </div>
    </div>
  );
};

export default CvView;
