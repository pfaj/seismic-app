import FooterItemSitemap from "./FooterItemSitemap";
import FooterItemLogo from "./FooterItemLogo";
import FooterItemSocial from "./FooterItemSocial";

function Footer() {
  return (
    <footer className="footerParent">
      <div className="footerContainer">
        <FooterItemSitemap />
        <FooterItemLogo />
        <FooterItemSocial />
      </div>
    </footer>
  );
}

export default Footer;
