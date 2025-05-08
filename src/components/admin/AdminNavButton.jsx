import { Link } from "react-router-dom";

export default function AdminNavButton({ link, text }) {
  function logout() {
    localStorage.removeItem("JWT");
  }
  return (
    <Link to={link}>
      <button className="signoutButton" onClick={logout}>
        <img src="/images/logout.svg" alt={text} />
      </button>
    </Link>
  );
}
