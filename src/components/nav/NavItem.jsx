import { Link } from 'react-router-dom';

export default function NavLinks({ link, text }) {
  return (
    <>
      <div className="navItem">
        <Link to={link}>
          {text}
        </Link>
      </div>
    </>
  );
}

