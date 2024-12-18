import Logo from '../Logo.js'
import NavLinks from './NavLinks.js'

function NavBar() {

    return (
        <>
            <nav>
                <Logo logoType="logoImage"/>
                <div></div>
                <NavLinks/>
            </nav>
        </>
    );
}

export default NavBar 

