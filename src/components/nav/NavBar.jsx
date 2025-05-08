import Logo from "../Logo";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <Logo logoType="logoImage" />
        </div>
        <div></div>
        <NavLinks />
      </nav>
    </>
  );
}
