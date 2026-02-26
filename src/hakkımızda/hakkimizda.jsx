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
                Biz, Yeşilköy Anadolu Lisesi’nin öğrenmeye istekli, yenilikçi ve üretken öğrencileriyiz.
                Alanında fark yaratmayı hedefleyen, genç ve dinamik bir ekip olarak; öğrenmeyi,
                paylaşmayı ve gelişimi odağına alan çalıştaylar düzenliyoruz.
                Farklı disiplinlerden gelen bireylerin bir araya gelerek deneyimlerini paylaşabildiği,
                iş birliği içinde üretebildiği katılımcı merkezli etkinlikler tasarlıyoruz. Amacımız;
                bilgiye ulaşmayı kolaylaştıran, ilham veren ve sürdürülebilir etki yaratan ortamlar oluşturmak.
            </div>
        </section>
    );
}

export default Hakkımızda;