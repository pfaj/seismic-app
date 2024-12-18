import instagram from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'

function FooterItemSocial() {
  return (    
    <div className="footerItem">
            <div className="socialContainer">
                <a className="socialItem" href="https://www.instagram.com/seismicstudios_/">
                        <img src={instagram} alt="Seismic Studios Instagram" />
                </a>
                <a className="socialItem" href="https://www.youtube.com/@SeismicStudios_">
                    <img src={youtube} alt="Seismic Studios Youtube" />
                </a>
            </div>
    </div>
  );
}

export default FooterItemSocial;
