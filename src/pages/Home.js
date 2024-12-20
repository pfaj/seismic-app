import Layout from '../components/Layout.js'
import Hero from '../components/hero/Hero.js'
import ClientScroll from '../components/home/ClientScroll.js'

function Project(){
    return(
        <Layout>
            <Hero text="SEISMIC STUDIOS" heroSubText="making a ground-breaking impact"/>
            <ClientScroll/>
        </Layout>
    )
}

export default Project;
