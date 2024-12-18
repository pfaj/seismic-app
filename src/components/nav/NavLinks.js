import NavItem from './NavItem.js'
import NavButton from './NavButton.js'

function NavLinks() {
  return (
    <>
        <div className="navLinks">
            <NavItem link="/about" text="About" />
            <NavItem link="/projects" text="Our Work" />
            <NavButton link="/contact" text="Contact" />
        </div>
    </>
  );
}

export default NavLinks;
