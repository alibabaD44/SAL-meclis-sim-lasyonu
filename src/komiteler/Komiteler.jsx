import './komiteler.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer';
import Loadingscreen from '../loadingScreen/loadingScreen'
import KHero from './KHero';
import Kpage from './Kpage';

function Komitelerpage(){
    return(
        <>
        <Loadingscreen/>
        <Navbar/>
        <KHero/>
        <Kpage/>
        <Footer/>
        </>
    )
}

export default Komitelerpage;