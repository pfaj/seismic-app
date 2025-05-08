import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import ContactForm from "../components/contact/ContactForm";

import "../css/contact.css";
import Image from "../images/SeismicBanner.webp";

export default function Contact() {
  //TODO: make the action for the contact form
  return (
    <Layout>
      <Hero
        className="contactHero"
        text="CONTACT US"
        image="true"
        source={Image}
      />
      <ContactForm />
    </Layout>
  );
}
