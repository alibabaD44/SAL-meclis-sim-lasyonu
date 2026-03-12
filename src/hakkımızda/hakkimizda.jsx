import { useEffect, useRef } from 'react';
import './hakkimizda.css';

function Hakkımızda() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id='hakkımızda' className='hakkımızda reveal' ref={sectionRef}>
            <div className='hak-baslik'>
                <h1>HAKKIMIZDA</h1>
            </div>
            <div className='hak-ack'>
                Biz, Şehremini Anadolu Lisesi öğrencileri tarafından düzenlenen Şehremini Meclis Simülasyonu’nun arkasındaki ekibiz. Katılımcıların savaş ve kriz temalı senaryolar üzerinden meclis işleyişini, müzakere süreçlerini ve karar alma mekanizmalarını deneyimleyebileceği bir ortam oluşturuyoruz.

                Amacımız; farklı bakış açılarını değerlendirebilen, sorumluluk bilinci gelişmiş ve çözüm odaklı bireylerin yetişmesine katkı sağlayan, öğretici ve ilham verici bir simülasyon deneyimi sunmaktır.
            </div>
        </section>
    );
}

export default Hakkımızda;