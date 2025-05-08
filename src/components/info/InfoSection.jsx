function InfoSection({ heading, text, image }) {
  return (
    <>
      <div className="infoSection">
        <div className="infoText">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="infoImage">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default InfoSection;
