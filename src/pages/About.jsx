import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Card from "../components/about/Card";
import "../css/about.css";

import aaronImg from "../images/headshots/aaron.jpg";
import aidanImg from "../images/headshots/aidan.jpg";
import liamImg from "../images/headshots/liam.jpg";
import julienImg from "../images/headshots/julien.jpg";
import kevinImg from "../images/headshots/kevin.jpg";

function About() {
  return (
    <Layout>
      <div className="heroAbout">
        <Hero text="ABOUT US" heroSubText="" />
      </div>

      <div className="missionStatementContainer">
        <div className="missionStatementContent">
          <hr className="missionLine" />
          <br />

          <h2>
            Seismic Studios is a national award-winning video production company
            in Elon, North Carolina. We work with our clients to tell
            groundbreaking stories that leave a lasting impact.
          </h2>
          <br />

          <hr className="missionLine" />
        </div>
      </div>

      <div className="aboutUsContainer">
        <div className="aboutUsContent">
          <div className="aboutUsHeader">
            <h2>OUR CREW</h2>
            <hr className="heroLine" />
          </div>

          <div className="aboutUsCardContainer">
            <Card
              title="Producer"
              name="Aaron Chan"
              image={aaronImg}
              alt="Headshot of Aaron Chan"
            />
            <Card
              title="Camera Operator"
              name="Aidan Jimenez"
              image={aidanImg}
              alt="Headshot of Aidan Jimenez"
            />
            <Card
              title="Sound Designer"
              name="Liam Dupas"
              image={liamImg}
              alt="Headshot of Liam Dupas"
            />
            <Card
              title="Colorist"
              name="Julien Dupas"
              image={julienImg}
              alt="Headshot of Julien Dupas"
            />
            <Card
              title="Writer"
              name="Kevin Reda"
              image={kevinImg}
              alt="Headshot of Kevin Reda"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
