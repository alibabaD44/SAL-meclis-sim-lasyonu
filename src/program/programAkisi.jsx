import './programAkisi.css'
import { useEffect, useRef } from 'react';

function Programakisi() {

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
            <section id='program' className='reveal' ref={sectionRef}>
                <div className='programbsk'>
                    <h1>PROGRAM AKIŞI</h1>
                </div>
                <div className='program'>

                    <div className='program-container'>
                        <div className='program-date'>
                            2 Mayıs
                        </div>
                        <hr />
                        <div className='program-sec'>
                            <div className='program-saat'>
                                09:00 - 10:00
                            </div>
                            <div className='program-ack'>
                                Yemek
                            </div>
                        </div>
                        <div className='program-sec'>
                            <div className='program-saat'>
                                10:00 - 11:00
                            </div>
                            <div className='program-ack'>
                                Toplantı
                            </div>
                        </div>
                    </div>
                    <div className='program-container'>
                        <div className='program-date'>
                            3 Mayıs
                        </div>
                        <hr />
                        <div className='program-sec'>
                            <div className='program-saat'>
                                09:00 - 10:00
                            </div>
                            <div className='program-ack'>
                                Yemek
                            </div>
                        </div>
                        <div className='program-sec'>
                            <div className='program-saat'>
                                10:00 - 11:00
                            </div>
                            <div className='program-ack'>
                                Toplantı
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Programakisi;