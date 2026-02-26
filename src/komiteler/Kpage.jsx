import './komiteler.css';

function Kpage() {
    const komiteler = [
        {
            id: 1,
            isim: "ADALET KOMİSYONU",
            logo: "/adalet.png",
            ack: "Hukuk devleti ilkeleri ışığında, yasama süreçlerinin anayasal uygunluğunu denetler ve simülasyonun adalet mekanizmasını koordine eder."
        },
        {
            id: 2,
            isim: "MİLLİ EĞİTİM KOMİSYONU",
            logo: "/egitim.png",
            ack: "Eğitim politikalarının modernizasyonu, akademik standartların geliştirilmesi ve gençliğin vizyoner bir geleceğe hazırlanması için stratejiler üretir."
        },
        {
            id: 3,
            isim: "DIŞİŞLERİ KOMİSYONU",
            logo: "/disisleri.png",
            ack: "Uluslararası ilişkiler, diplomasi ve stratejik ortaklıkları yöneterek, meclis simülasyonunun küresel vizyonunu ve dış politikasını belirler."
        },
        {
            id: 4,
            isim: "PLAN VE BÜTÇE KOMİSYONU",
            logo: "/ekonomi.png",
            ack: "Ekonomik kaynakların verimli kullanımını planlar, bütçe disiplinini sağlar ve simülasyonun mali kalkınma stratejilerini analiz eder."
        },
        {
            id: 5,
            isim: "İÇİŞLERİ KOMİSYONU",
            logo: "/icisleri.png",
            ack: "Kamu düzeninin korunması, yerel yönetimlerin koordinasyonu ve vatandaşlık haklarının tesisi için gerekli idari çalışmaları yürütür."
        },
        {
            id: 6,
            isim: "MİLLİ SAVUNMA KOMİSYONU",
            logo: "/savunma.png",
            ack: "Ulusal güvenliğin sağlanması, savunma stratejilerinin geliştirilmesi ve stratejik caydırıcılık unsurlarının planlanmasından sorumludur."
        }
    ];

    return (
        <section className='komiteler-list'>
            <div className='komiteler-container'>
                {komiteler.map((komite) => (
                    <div key={komite.id} className='komite-card'>
                        <div className='komite-image-wrapper'>
                            <img src={komite.logo} className='komite-logo' alt={komite.isim} />
                        </div>
                        <div className='komite-content'>
                            <h2 className='komite-bsk'>{komite.isim}</h2>
                            <p className='komite-ack'>{komite.ack}</p>
                            <button className='komite-btn'>İncele</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Kpage;