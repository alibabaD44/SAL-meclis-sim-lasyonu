import { useState, useEffect } from 'react';
import './home.css';
import { NavHashLink } from 'react-router-hash-link'; 

function Home() {
    const targetDate = "2026-04-13T00:00:00"; 

    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="video-background">
            <video autoPlay muted loop playsInline>
                <source src='/background-video.mp4' type='video/mp4'/>
            </video>
            
            <div className="content-overlay">
                <div className='Baslik'>
                    <b>ŞAL</b> MECLİS SİMÜLASYONU
                </div>

                <div className="countdown">
                    <div className="time-box"><span>{timeLeft.days}</span> Gün</div>
                    <div className="time-box"><span>{timeLeft.hours}</span> Saat</div>
                    <div className="time-box"><span>{timeLeft.minutes}</span> Dakika</div>
                    <div className="time-box"><span>{timeLeft.seconds}</span> Saniye</div>
                </div>

                <button className='basvur-button'><NavHashLink to="/basvuru">BAŞVUR</NavHashLink></button>
            </div>
        </div>
    );
}

export default Home;