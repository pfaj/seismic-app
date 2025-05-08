import Layout from '../components/Layout'
import Hero from '../components/hero/Hero'
import ClientScroll from '../components/home/ClientScroll'
import InfoSection from '../components/info/InfoSection'

import AI from '../images/stills/finn/1.png'
import CI from '../images/bts/9.png'

export default function Home(){
    return(
        <Layout>
            <Hero text="SEISMIC STUDIOS" heroSubText="making a ground-breaking impact"/>

            <div className='infoContainer'>
                <ClientScroll />

                <InfoSection heading="ABOUT US" 
                    text="We transform ideas into compelling stories through the power of video. As creative
                    problem-solvers and visual storytellers, we partner with our clients to deliver 
                    messages that leave a lasting impact."

                    image={CI}
                />


                <InfoSection heading="OUR SERVICES" 
                    text="Our seasoned team handles every aspect of production - from concept development and scriptwriting
                    to filming, editing, and post-production. We dig deep to understand your unique challenges,
                    creatively crafting media that achieves your goals."

                    image={AI}
                />
            </div>

        </Layout>
    )
}

