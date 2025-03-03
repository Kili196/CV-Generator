import ExperienceSection from "./ExperienceSection";
import HeaderDetails from "./HeaderDetails";
import Seperator from "./Seperator";

const CvView = ({ user }) => {
  return (
    <div className="cv-view flex-center">
      <div className="cv-container">
        <header>
          <HeaderDetails user={user} />
          <img src="/public/profile-picture-placeholder.png" />
        </header>

        <main>
          <ExperienceSection />
        </main>
      </div>
    </div>
  );
};

export default CvView;
