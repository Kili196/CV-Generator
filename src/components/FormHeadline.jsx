const FormHeadline = ({ headline, addInput }) => {
  return (
    <div className="">
      <div className="flex-row justify-content-spacebetween padding inputblock-headline">
        <h1 className="">
          {" "}
          <em>{headline} </em>{" "}
        </h1>
        <button onClick={addInput}> ADD </button>
      </div>
      <div className="headline-seperator"> </div>
    </div>
  );
};

export default FormHeadline;
