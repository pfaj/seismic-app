import HeroVideo from './HeroVideo'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

function Hero({text, heroSubText, image, source}) {
  return (
        <div className="heroImageContainer">
            {image === "true"? <HeroImage source={source}/> : <HeroVideo/>}
            <HeroText heroText={text} heroSubText={heroSubText}/>
        </div>
  );
}

export default Hero;
