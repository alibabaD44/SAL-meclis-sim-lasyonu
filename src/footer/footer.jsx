import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='footer-logo'>
                    <img src="/meclislogo.png" alt="Meclis Logo" />
                </div>

                <div className='footer-info'>
                    <h2 className='footer-bsk'>ŞAL MECLİS SİMÜLASYONU</h2>
                </div>

                <div className='footer-links'>
                    <a href="https://www.instagram.com/sehreminimeclis26/" 
                       target="_blank" 
                       rel="noreferrer" 
                       className="footer-insta">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {currentYear} Şehremini Anadolu Lisesi. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;