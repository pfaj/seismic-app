import {Link} from 'react-router-dom';

function NavLinks({link, text}) {
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

export default NavLinks;
