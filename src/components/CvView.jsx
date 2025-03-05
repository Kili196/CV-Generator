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
          <section>
            <h1>
              <em> Test </em>
            </h1>
            <Seperator />
            <div className="padding-left-1em">
              <li> Test </li>
              <li> Test </li>
              <li> Test </li>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CvView;
