import  NavItem from '../nav/NavItem'
function FooterItemSitemap() {
  return (    
        <div className="footerItem">
            Site Map
            <hr className="footerLine"/>
            <NavItem text="About"/>
            <NavItem text="Our Work"/>
            <NavItem text="Contact"/>
        </div>
  );
}

export default FooterItemSitemap;
