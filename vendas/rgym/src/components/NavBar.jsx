import React, { useEffect, useState } from 'react'
import './NavBar.css'

const NavBar = () => {
    const [scrollAtivo, setScrollAtivo] = useState(false)
    const [menuAtivo, setMenuAtivo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollAtivo(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header id="header" className={scrollAtivo ? 'rolagem' : ''}>
            <div className='container'>
                <div className="flex">
                    <p id='RGYM'>R<span>GYM</span></p>

                    <nav>
                        <ul id="nav-list" className={menuAtivo ? 'ativo' : ''}>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Atividades</a></li>
                            <li><a href="#">Planos</a></li>
                            <li><a href="#">Depoimentos</a></li>
                            <li className="btn-comece"><a href="#"><button>Comece Hoje</button></a></li>
                        </ul>

                        <div id="menu-btn" onClick={() => setMenuAtivo(!menuAtivo)}>
                            {menuAtivo ? (
                                <span className='close-icon'>✖</span>
                            ) : (
                                <>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar
