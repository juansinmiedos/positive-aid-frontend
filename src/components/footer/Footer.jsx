import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p className="logo">positive(+) aid</p>
                    </div>
                    <div className="column">
                        <h3>¿Necesitas ayuda?</h3>
                        <ul>
                            <li className="link">Número de emergencia</li>
                        </ul>
                    </div>
                </div>
                <div className="divisor"></div>
                <div className="columns">
                    <div className="column">
                        <h4>Nosotros</h4>
                        <ul>
                            <li className="link">Acerca del positive(+) aid</li>
                            <li className="link">Contribuir al proyecto</li>
                            <li className="link">Términos y condiciones</li>
                            <li className="link">Políticas de privacidad</li>
                            <li className="link"></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Páginas públicas</h4>
                        <ul>
                            <li className="link">El VIH/SIDA</li>
                            <li className="link">VIH y tratamiento</li>
                            <li className="link">VIH y consumo de sustancias</li>
                            <li className="link">VIH y otras enfermedades</li>
                            <li className="link">Mapa de CAPACITS en México</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Fuentes y referencias</h4>
                        <ul>
                            <li className="link">Guías de manejo antirretroviral</li>
                            <li className="link">Medicamentos</li>
                            <li className="link">Material de lectura</li>
                            <li className="link">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer