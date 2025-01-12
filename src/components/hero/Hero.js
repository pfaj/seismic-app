import HeroVideo from './HeroVideo.js'
import HeroImage from './HeroImage.js'
import HeroText from './HeroText.js'

function Hero({text, heroSubText, image, source}) {
  return (
        <div className="heroImageContainer">
            {image === "true"? <HeroImage source={source}/> : <HeroVideo/>}
            <HeroText heroText={text} heroSubText={heroSubText}/>
        </div>
  );
}

export default Hero;
