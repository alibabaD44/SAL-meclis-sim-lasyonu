import './basvuruformu.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import BFHero from './BFHero';
import BFForm from './BFForm';

function Bf() {
    return(
        <>
        <Navbar/>
        <BFHero/>
        <BFForm/>
        <Footer/>
        </>
    )
}

export default Bf;