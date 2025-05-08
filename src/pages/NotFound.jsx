import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import NavButton from "../components/nav/NavButton";

function Project() {
  return (
    <>
      <Layout>
        <Hero text="404" heroSubText="Page Not Found" />
        <NavButton to="/" text="Back to Home" />
      </Layout>
    </>
  );
}

export default Project;
