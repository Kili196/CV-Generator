const HeaderDetails = ({ user }) => {
  return (
    <div className="cv-details">
      {user.firstname && user.lastname && (
        <div className="cv-detail">
          <label className="cv-label">Name:</label>
          <span className="cv-value">
            {user.firstname} {user.lastname}
          </span>
        </div>
      )}

      {user.email && (
        <div className="cv-detail">
          <label className="cv-label">Email:</label>
          <span className="cv-value">{user.email}</span>
        </div>
      )}
      {user.address && (
        <div className="cv-detail">
          <label className="cv-label">Address:</label>
          <span className="cv-value">{user.address}</span>
        </div>
      )}
      {user.phonenumber && (
        <div className="cv-detail">
          <label className="cv-label">Phonenumber:</label>
          <span className="cv-value">{user.phonenumber}</span>
        </div>
      )}
    </div>
  );
};

export default HeaderDetails;
