const TextArea = ({ placeholder }) => {
  return (
    <>
      <div className="text-area-container">
        <textarea placeholder={placeholder} className="full-width" />
      </div>
    </>
  );
};

export default TextArea;
