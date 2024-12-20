import Slider from 'react-infinite-logo-slider'
import '../../css/home.css'
import CCMLogo from '../../images/logos/CCMLogo.png'
import ElonULogo from '../../images/logos/ElonULogo.jpg'
import PDYLogo from '../../images/logos/PDY_LOGO.png'
import DCLogo from '../../images/logos/citygate.png'

function ClientScroll(){
    return(
        <>
            <div className="clientContainer">
                <h2 className="clientText">OUR CLIENTS</h2>
                <Slider
                    width="200px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                >
                    <Slider.Slide>
                        <img src={PDYLogo} alt="any" className='w-36' height='80'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={ElonULogo} alt="any" className='w-36' height='80px'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={DCLogo} alt="any" className='w-36' height='80px'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={CCMLogo} alt="any" className='w-36' height='80px'/>
                    </Slider.Slide>
                </Slider>
            </div>
        </>
    );
}

export default ClientScroll;
