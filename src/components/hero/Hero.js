import HeroVideo from './HeroVideo.js'
import HeroText from './HeroText.js'

function Hero({text, heroSubText}) {
  return (
        <div className="heroImageContainer">
            <HeroVideo/>
            <HeroText heroText={text} heroSubText={heroSubText}/>
        </div>
  );
}

export default Hero;
