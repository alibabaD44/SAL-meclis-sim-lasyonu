import './error.css'
import { Link } from 'react-router-dom';
import Loadingscreen from '../loadingScreen/loadingScreen';

function Error404() {
    return(
        <>
        <Loadingscreen/>
        <section>
            <div className='error'>
                <div className='error-container'>
                    <div className='error-bsk'>
                        ERROR 404
                    </div>
                    <div className='error-ack'>
                        Böyle bir sayfa mevcut değil.
                    </div>
                    <button className='error-back'>
                        <Link to={"/"}>Anasayfaya dön</Link>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Error404;