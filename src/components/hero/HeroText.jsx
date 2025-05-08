function HeroText({ heroText, heroSubText }) {
  return (
    <div className="heroText">
      <p>{heroText}</p>
      <hr className="heroLine" />
      <p className="heroSubText">{heroSubText}</p>
    </div>
  );
}

export default HeroText;
