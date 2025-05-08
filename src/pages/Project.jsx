import ProjectComponent from '../components/project/Project'
import Layout from '../components/Layout'
import Hero from '../components/hero/Hero'
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
