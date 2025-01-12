import Layout from '../components/Layout.js'
import Hero from '../components/hero/Hero.js'
import ContactForm from '../components/contact/ContactForm.js'

import '../css/contact.css'
import Image from '../images/SeismicBanner.webp'

function Contact(){
    //TODO: make the action for the contact form
    return(
        <Layout>
            <Hero className="contactHero" text="CONTACT US" image="true" source={Image}/>
            <ContactForm/>
        </Layout>
    )
}

export default Contact;
