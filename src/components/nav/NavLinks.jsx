import NavItem from "./NavItem";
import NavButton from "./NavButton";

function NavLinks() {
  return (
    <>
      <div className="navLinks">
        <NavItem link="/projectmanagement" text="Management" />
        <NavItem link="/about" text="About" />
        <NavItem link="/projects" text="Our Work" />
        <NavButton link="/contact" text="Contact" />
      </div>
    </>
  );
}

export default NavLinks;
