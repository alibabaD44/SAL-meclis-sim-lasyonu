import { useState, useEffect, useRef } from 'react';
import './faq.css';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const sorular = [
        {
            soru: "ŞAL Meclis Simülasyonu nedir?",
            cevap: "Meclis Simülasyonu, lise öğrencileri tarafından organize edilen ve gençleri ülkemizin yasama faaliyetleri ile tanıştırma amacı taşıyan bir organizasyondur. Katılımcılarına; planlı bir ortamda insanlarla birlikte çalışabilme, topluluk içinde fikirlerini rahatça açıklayabilme, çözüm odaklı düşünebilme gibi yetiler kazandırır."
        },
        {
            soru: "Katılım için herhangi bir ücret ödemem gerekiyor mu?",
            cevap: "Etkinlik detayları ve katılım şartları başvuru formunda belirtilmektedir. Güncel bilgiler için duyurularımızı takip edebilirsiniz."
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='faq reveal' id='sss' ref={sectionRef}>
            <div className='faq-container'>
                <div className='faq-bsk'>
                    <h1>Sıkça Sorulan Sorular</h1>
                </div>
                <div className='faq-liste'>
                    {sorular.map((item, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className='faq-soru'>
                                {item.soru}
                                <span className="arrow">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className='faq-cvp'>
                                <p>{item.cevap}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;