import reel from '../../images/DemoReel23.webm'

function HeroVideo() {
  return (
        <video className="heroImage" autoPlay loop>
            <source src={reel} type="video/webm"></source>
            Your browser does not support video
        </video>
  );
}

export default HeroVideo;
