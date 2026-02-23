import './map.css'

function Map() {
    return (
        <>
            <section className='map'>
                <div className='map-bsk'>
                   <h1>ETKİNLİK YERİ</h1> 
                </div>
                <div className='map-ack'>
                    <b>Adres</b>: Deniz Abdal Mahallesi, Şehremini Mh Turgut Özal Millet Caddesi, Derviş Paşa Sk. No:93
                </div>
                <div className='map-map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.4340806120468!2d28.93577601237976!3d41.01334180117348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba30ce15cf8d%3A0x8f65699445805681!2s%C5%9Eehremini%20Anadolu%20Lisesi!5e0!3m2!1str!2str!4v1771856094329!5m2!1str!2str"
                         loading="lazy" 
                         referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </>
    )
}

export default Map;