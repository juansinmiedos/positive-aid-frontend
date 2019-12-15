import React from 'react'

const HomeView = () => {
    return (
        <>
            <header>
                <h2>Somos la herramienta </h2>
                <h2>que te ayuda a <span>vivir positivo</span></h2>
                <button className="btn-large">Regístrate ahora</button>
            </header>

            <section className="section">
                <div className="container">
                    <article className="home-article columns">
                        <div className="column">
                            <img src="https://assets.website-files.com/5daf49fd111638520207d78a/5dc9c2dc66fd1bb6819229c3_sofia_v1.svg" alt="imagenes de muestra"/>
                        </div>
                        <div className="column">
                            <h3>Nos preocupamos <br /> por tu salud</h3>
                            <div className="divisor"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur veniam repellat! Magni repudiandae aut id! Dignissimos id sit enim ducimus! In non pariatur tempora modi quia accusantium eum corrupti.</p>
                        </div>
                    </article>

                    <article className="home-article columns">
                        <div className="column">
                            <h3>Una plataforma <br /> que te ayuda</h3>
                            <div className="divisor"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque accusamus quaerat maxime! Quod, sunt illo accusantium, tempora dolore officia in dignissimos quas, expedita maxime esse unde minus animi facilis?</p>
                        </div>
                        <div className="column">
                            <img src="https://assets.website-files.com/5daf49fd111638520207d78a/5dc9c2dc66fd1bb6819229c3_sofia_v1.svg" alt="imagenes de muestra"/>
                        </div>
                    </article>

                    <article className="home-article columns">
                        <div className="column">
                            <img src="https://assets.website-files.com/5daf49fd111638520207d78a/5dc9c2dc66fd1bb6819229c3_sofia_v1.svg" alt="imagenes de muestra"/>
                        </div>
                        <div className="column">
                            <h3>Comprometidos con <br /> tu seguridad</h3>
                            <div className="divisor"></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eveniet ab omnis! Voluptates placeat dolor itaque consequuntur praesentium accusamus quasi ad nostrum, quibusdam amet, recusandae vitae, beatae dolorum eum incidunt.</p>
                        </div>
                    </article>

                    <article className="home-article columns">
                        <div className="column">
                            <h3>Páginas públicas</h3>
                            <div className="divisor"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum tenetur quia a deleniti blanditiis minima placeat eius aspernatur alias tempora iusto debitis veniam nam, quisquam autem excepturi dicta quibusdam.</p>
                        </div>
                        <div className="column">
                            <img src="https://assets.website-files.com/5daf49fd111638520207d78a/5dc9c2dc66fd1bb6819229c3_sofia_v1.svg" alt="imagenes de muestra"/>
                        </div>
                    </article>
                
                    <h4>Botón</h4>

                    <article className="columns">
                        <div className="column">
                            <div className="divisor"></div>
                            <h3>"Aplaudo a los valientes que viven abiertamente con el VIH, que abogan sin descanso por los derechos de los seropositivos y que instruyen a otros respecto del SIDA."</h3>
                            <p>- Ban Ki-moon, ex Secretario de las Naciones Unidas.</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default HomeView