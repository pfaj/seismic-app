import ProjectComponent from '../components/project/Project.js'
import Layout from '../components/Layout.js'
import Hero from '../components/hero/Hero.js'
import '../css/gallery.css';
import '../css/work.css';

function Project(){
    return(
        <Layout>
            <Hero text="OUR WORK"/>
            <ProjectComponent />
        </Layout>
    )
}

export default Project;
