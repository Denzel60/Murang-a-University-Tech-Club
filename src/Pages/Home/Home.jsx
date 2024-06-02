// import { FaBeer } from 'react-icons/fa';
import './Home.css'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Testimonials from './Testimonials.jsx'

const Home = () => {
    return(
        <section className='home'>
            <Hero />
            <About />
            <Testimonials />
        </section>
    )
}

export default Home