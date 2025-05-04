import React from 'react'
import './Sobre.css'
import { FaArrowRight } from 'react-icons/fa';
import { CiAlarmOn } from "react-icons/ci";
import { GiWeightLiftingUp } from 'react-icons/gi'; // Game Icons
import { FaTrophy } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Sobre = () => {
    return (
        <div className='container-v3'>
            <div className="section-v3">
                <div className="sobre-traco">
                    <p>SOBRE A <span>RGYM</span></p>
                </div>
                <div className="traco-amarelo"></div>

                <div className="texto">
                    <p>A RGYM nasceu com um propósito: oferecer um ambiente de treino de alta qualidade, acessível a pessoas de todos os níveis de condicionamento físico, ajudando cada uma a alcançar seus objetivos individuais.</p>
                    <p>Nossa abordagem une tecnologia de ponta, profissionais qualificados e uma comunidade acolhedora para proporcionar uma experiência de academia verdadeiramente diferenciada.</p>
                    <p>Mais do que levantar pesos ou correr na esteira, nossa missão é transformar vidas por meio do fitness, da saúde e do bem-estar.</p>
                    <button> Conheça nossos planos <FaArrowRight /></button>
                </div>
            </div>

            <div className="cards">
                <div className="card-equipamento">
                    <div className="icon">
                        <GiWeightLiftingUp color='#FECB00' style={{ width: '35px', height: '35px' }} />
                    </div>
                    <div className="texto-v3">
                        <h2>Equipamentos Modernos</h2>
                        <p>Oferecemos máquinas e
                            equipamentos de última
                            geração para otimizar seus
                            treinos</p>
                    </div>
                </div>
                <div className="card-funcionamento">
                    <div className="icon">
                        <CiAlarmOn color='#FECB00' style={{ width: '35px', height: '35px' }} />
                    </div>
                    <div className="texto-v3">
                        <h2>Aberto 24/7</h2>
                        <p>Academia disponível 24h
                            por dia, 7 dias da
                            semana para sua conviniência</p>
                    </div>
                </div>
                <div className="card-treinadores">
                    <div className="icon">
                        <FaTrophy color='#FECB00' style={{ width: '35px', height: '35px' }} />
                    </div>
                    <div className="texto-v3">
                        <h2>Treinadores Profissionais</h2>
                        <p>Equipe de etreinadores qualificados
                            e experiêntes para guiar o seu progresso</p>
                    </div>
                </div>
                <div className="card-grupo">
                    <div className="icon">
                        <FaWhatsapp color='#FECB00' style={{ width: '35px', height: '35px' }} />
                    </div>
                    <div className="texto-v3">
                        <h2>Fale Conosco pelo Whatsapp</h2>
                        <p>Faça parte de uma comunidade
                            motivada e inspiradora de fitness
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre
