const FormHeadline = ({ headline }) => {
  return (
    <div className="form-headline">
      <div className="heading">
        <h1> {headline}</h1>
        <button> ADD </button>
      </div>
      <div className="headline-seperator"> </div>
    </div>
  );
};

export default FormHeadline;
