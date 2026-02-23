import './programAkisi.css'

function Programakisi() {
    return (
        <>
            <section id='program'>
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