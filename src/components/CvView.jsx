import HeaderDetails from "./HeaderDetails";

const CvView = ({ user }) => {
  return (
    <div className="cv-view flex-center">
      <div className="cv-container">
        <header>
          <HeaderDetails user={user} />
          <img src="/public/profile-picture-placeholder.png" />
        </header>

        <main> dsad </main>
      </div>
    </div>
  );
};

export default CvView;
