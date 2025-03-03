const HeaderDetails = () => {
  return (
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
  );
};

export default HeaderDetails;
