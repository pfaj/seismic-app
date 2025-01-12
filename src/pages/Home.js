import Layout from '../components/Layout.js'
import Hero from '../components/hero/Hero.js'
import ClientScroll from '../components/home/ClientScroll.js'
import InfoSection from '../components/info/InfoSection.js'

function Home(){
    return(
        <Layout>
            <Hero text="SEISMIC STUDIOS" heroSubText="making a ground-breaking impact"/>
            <ClientScroll/>

            <div className='infoContainer'>
                <InfoSection heading="ABOUT US" 
                    text="We transform ideas into compelling stories through the power of video. As creative
                    problem-solvers and visual storytellers, we partner with our clients to deliver 
                    messages that leave a lasting impact."

                    image=""
                />

                <InfoSection heading="OUR SERVICES" 
                    text="Our seasoned team handles every aspect of production - from concept development and scriptwriting
                    to filming, editing, and post-production. We dig deep to understand your unique challenges,
                    creatively crafting media that achieves your goals."

                    image=""
                />
            </div>

        </Layout>
    )
}

export default Home;
