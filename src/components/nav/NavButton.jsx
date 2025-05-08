import {Link} from 'react-router-dom';

function NavButton({link,text}) {
  return (
        <Link to={link}>
            <div className="navButton">{text}</div>
        </Link>
  );
}

export default NavButton;
