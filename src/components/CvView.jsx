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
            <h1> Test </h1>
            <Seperator />
            <ul>
              <li> Test </li>
              <li> Test </li>
              <li> Test </li>
            </ul>
          </section>
          <section>
            <h1> Test </h1>
            <Seperator />
            <ul>
              <li> Test </li>
              <li> Test </li>
              <li> Test </li>
            </ul>
          </section>
          <section>
            <h1> Test </h1>
            <Seperator />
            <ul>
              <li> Test </li>
              <li> Test </li>
              <li> Test </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CvView;
