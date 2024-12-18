import Layout from '../components/Layout.js'
import Hero from '../components/hero/Hero.js'
import NavButton from '../components/nav/NavButton.js'

function Project(){
    return(
        <>
        <Layout>
            <Hero text='404' heroSubText='Page Not Found'/>
            <NavButton to="/" text="Back to Home"/>
        </Layout>
        </>
    )
}

export default Project;
