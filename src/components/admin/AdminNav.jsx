import Logo from "../Logo";
import AdminNavButton from "./AdminNavButton";

export default function AdminNav() {
  return (
    <>
      <nav>
        <div>
          <Logo logoType="logoImage" />
          ADMIN
        </div>
        <div></div>
        <AdminNavButton link="/" text="Signout" />
      </nav>
    </>
  );
}
