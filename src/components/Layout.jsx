import Font from './Font'
import NavBar from './nav/NavBar'
import Footer from './footer/Footer'
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
