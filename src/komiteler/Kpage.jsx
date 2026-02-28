import './komiteler.css';

function Kpage() {
    const komiteler = [
    { 
        id: 1, 
        isim: "ADALET KOMİSYONU", 
        logo: "/adalet.png", 
        ack: "Türkiye Cumhuriyeti Devleti’nin hukuk sisteminin etkinliğini ve adaletin sağlanmasını inceleyen, yasa değişiklikleri ve reform önerileri sunan bir komisyondur. Mevzuatın toplum ihtiyaçlarına uygunluğunu değerlendirir; adli sistemdeki aksaklıkları gidererek hukukun üstünlüğünü güçlendirmeyi amaçlar." 
    },
    { 
        id: 2, 
        isim: "MİLLİ EĞİTİM KOMİSYONU", 
        logo: "/egitim.png", 
        ack: "Türkiye Cumhuriyeti’nin eğitim politikalarını ve pedagojik sistemini inceleyen, eğitimde fırsat eşitliğini güçlendirmeye yönelik yasa ve reform önerileri sunan bir komisyondur. Eğitim müfredatının çağdaş ihtiyaçlara uygunluğunu değerlendirir; nitelikli gelişimi sağlamak amacıyla yapısal aksaklıkları gidermeyi amaçlar." 
    },
    { 
        id: 3, 
        isim: "DIŞİŞLERİ KOMİSYONU", 
        logo: "/disisleri.png", 
        ack: "Uluslararası ilişkilerde Türkiye’nin stratejik çıkarlarını analiz eden, diplomasi süreçlerine yönelik yasal düzenlemeler ve protokol önerileri sunan bir komisyondur. Küresel gelişmelerin ulusal çıkarlara etkisini değerlendirir; diplomatik ilişkileri güçlendirerek Türkiye’nin dünya sahnesindeki etkinliğini artırmayı amaçlar." 
    },
    { 
        id: 4, 
        isim: "PLAN VE BÜTÇE KOMİSYONU", 
        logo: "/ekonomi.png", 
        ack: "Devletin mali kaynaklarının yönetimini ve kamu harcamalarının verimliliğini inceleyen, bütçe yasaları ve ekonomik reform paketleri sunan bir komisyondur. Vergi sisteminin toplumun ekonomik refahına uygunluğunu değerlendirir; mali disiplini sağlayarak sürdürülebilir bir ekonomik kalkınmayı gerçekleştirmeyi amaçlar." 
    },
    { 
        id: 5, 
        isim: "İÇİŞLERİ KOMİSYONU", 
        logo: "/icisleri.png", 
        ack: "Kamu düzeninin tesisi, iç güvenlik stratejileri ve yerel yönetimlerin idari yapısını inceleyen, mülki idare sistemine yönelik yasa ve modernizasyon önerileri sunan bir komisyondur. Vatandaşlık haklarının korunmasını değerlendirir; bürokratik engelleri gidererek toplumsal huzuru ve devlet-vatandaş bağını güçlendirmeyi amaçlar." 
    },
    { 
        id: 6, 
        isim: "MİLLİ SAVUNMA KOMİSYONU", 
        logo: "/savunma.png", 
        ack: "Ulusal savunma stratejilerini ve savunma sanayii politikalarını inceleyen, askeri mevzuat ve güvenlik reformları sunan bir komisyondur. Ülkenin caydırıcılık kapasitesinin güncel tehditlere uygunluğunu değerlendirir; stratejik savunma yatırımlarıyla milli güvenliği en üst seviyede tutmayı ve stratejik bağımsızlığı korumayı amaçlar." 
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Kpage;