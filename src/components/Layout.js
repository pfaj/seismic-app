import Font from './Font.js'
import NavBar from './nav/NavBar.js'
import Footer from './footer/Footer.js'
import '../css/styles.css';
import '../css/home.css';

function Layout({ children }) {
    return (
        <>
            <Font />
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
