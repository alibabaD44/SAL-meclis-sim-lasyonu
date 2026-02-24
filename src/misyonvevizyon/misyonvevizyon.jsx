import './misyonvevizyon.css'
import { useEffect, useRef } from 'react';

function Misyonandviyzonsection() {
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
        <>
            <section id='misyon&vizyon' className='misyonandvizyon reveal' ref={sectionRef}>
                <div className='misyon'>
                    <div className='misyon-bsk'>
                        Misyonumuz
                    </div>
                    <div className='misyon-ack'>
                        Meclis simülasyonumuz ile katılımcıların savaş ve kriz temalı senaryolar üzerinden meclis işleyişini, karar alma, müzakere ve temsil süreçlerini uygulamalı olarak deneyimlemesini sağlamak; farklı görüşleri değerlendirebilen, sorumluluk bilinci gelişmiş ve çözüm odaklı bireyler yetiştirmeyi amaçlamak temel misyonumuzdur.
                    </div>
                </div>
                <div className='vizyon'>
                    <div className='vizyon-bsk'>
                        Vizyonumuz
                    </div>
                    <div className='vizyon-ack'>
                        Düzenlediğimiz meclis simülasyonu ile birlikte gelecekte yaşanabilecek her türlü konuda katılımcılarımızın hazırlanmasını hedefliyoruz. Birçok alanda kendini geliştirmiş öğrencilerin, gelecekte iyi yerlere gelerek kriz, çatışma ve savaş gibi küresel sorunlara karşı bilinçli, sorumluluk sahibi ve çözüm odaklı bireyler olarak topluma katkı sağlamasını amaçlıyoruz.
                    </div>
                </div>
            </section>
        </>
    )
}

export default Misyonandviyzonsection;