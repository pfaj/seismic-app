import Slider from 'react-infinite-logo-slider'
import '../../css/home.css'
import CCMLogo from '../../images/logos/CCM.png'
import ElonULogo from '../../images/logos/EU.png'
import PDYLogo from '../../images/logos/pdyf.png'
import DCLogo from '../../images/logos/DC.png'

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
                        <img src={PDYLogo} alt="any" className='w-36' height='120px'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={CCMLogo} alt="any" className='w-36' height='120px'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={DCLogo} alt="any" className='w-36' height='120px'/>
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={ElonULogo} alt="any" className='w-36' height='120px'/>
                    </Slider.Slide>
                </Slider>
            </div>
        </>
    );
}

export default ClientScroll;
