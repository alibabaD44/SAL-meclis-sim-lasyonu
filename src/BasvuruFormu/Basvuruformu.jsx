import './basvuruformu.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import BFHero from './BFHero';
import BFForm from './BFForm';
import Loadingscreen from '../loadingScreen/loadingScreen';

function Bf() {
    return(
        <>
        <Loadingscreen/>
        <Navbar/>
        <BFHero/>
        <BFForm/>
        <Footer/>
        </>
    )
}

export default Bf;