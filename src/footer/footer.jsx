import './footer.css'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className='footer-logo'>
                            <img src="/meclislogo.png" alt="Meclis Logo" />
                        </div>
                        <h2 className='footer-bsk'>ŞEHREMİNİ ANADOLU LİSESİ<br /><span>MECLİS SİMÜLASYONU</span></h2>
                    </div>

                    <div className="footer-nav">
                        <h4>HAKKIMIZDA</h4>
                        <ul>
                            <li><NavHashLink smooth to="/#hakkımızda">Hakkımızda</NavHashLink></li>
                            <li><NavHashLink smooth to="/#program">Program</NavHashLink></li>
                            <li><Link to="/komiteler">Komisyonlar</Link></li>
                            <li><Link to="/basvuru">Başvuru</Link></li>
                            <li><NavHashLink smooth to="/#sss">SSS</NavHashLink></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>BİZİ TAKİP EDİN</h4>
                        <div className='footer-links'>
                            <a href="https://www.instagram.com/sehreminimeclis26/"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-insta">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Şehremini Anadolu Lisesi Meclis Simülasyonu. Tüm hakları saklıdır.</p>
                        <p className="footer-dev">Design & Development by ŞAL BT</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;