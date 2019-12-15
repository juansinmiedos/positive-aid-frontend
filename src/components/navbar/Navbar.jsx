import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li className="logo">positive(+) aid</li>
                <li>
                    <form action="">
                        <input type="text" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña"/>
                        <button>Iniciar sesión</button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 