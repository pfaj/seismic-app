import FooterItemSitemap from './FooterItemSitemap.js'
import FooterItemLogo from './FooterItemLogo.js'
import FooterItemSocial from './FooterItemSocial.js'

function Footer() {
  return (    
        <footer className='footerParent'>
            <div className="footerContainer">
                <FooterItemSitemap/>
                <FooterItemLogo/>
                <FooterItemSocial/>

            </div>
        </footer>
  );
}

export default Footer;
