const CvView = () => {
  return (
    <div className="cv-view flex-center">
      <div className="cv-container">
        <header>
          <div className="cv-details">
            <div className="cv-detail">
              <label className="cv-label">Name:</label>
              <span className="cv-value">Kilian Baier</span>
            </div>
            <div className="cv-detail">
              <label className="cv-label">Address:</label>
              <span className="cv-value">Tulln, Sonnenstraße</span>
            </div>
            <div className="cv-detail">
              <label className="cv-label">Email:</label>
              <span className="cv-value">Kilian.baier16@gmail.com</span>
            </div>
            <div className="cv-detail">
              <label className="cv-label">Phone Number:</label>
              <span className="cv-value">+43 12 112 212 2</span>
            </div>
          </div>
          <div className="cv-image"></div>
        </header>

        <main> </main>
      </div>
    </div>
  );
};

export default CvView;
