import React from 'react'
import './Presentation.css'
import { FaBolt } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa';
import Ragma from "../img/ragma.PNG"
import TreinoRagma from '../assets/treinoRagma.mp4'
import OndaAmarela from '../img/ondaAmarela.png'
const Presentation = () => {
    return (
        <div className='container-v2'>
            <div className='geral-texto'>
                <div className='elemento-academia'>
                    <FaBolt color='#FF822D' /><p>ACADEMIA PREMIUM</p>
                </div>

                <div className="texto-capa">
                    <div className="texto-h1">
                        <p>DEFINA <span>SEU CORPO</span></p>
                        <h3>Transforme-se com RGYM</h3>
                    </div>
                </div>

                <div className="frase-capa">
                    <div className="barra-lateral"></div>
                    <p>Liberte seu potencial e embarque em uma jornada
                        rumo a um você mais forte, mais em forma e mais
                        confiante. Inscreva-se agora e testemunhe a
                        incrível transformação que seu corpo é capaz de
                        alcançar!</p>
                </div>

                <div className="butoes">
                    <div className="botao-plano">Começar Agora <FaArrowRight /></div>
                    <div className="botao-rgym">Conheça a RGYM </div>
                </div>
            </div>

            <div className='geral-img'>
                <div className="circulo">
                    <div className="imgs">
                        <video
                            src={TreinoRagma}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-fundo"
                        />

                        <img src={Ragma} id='img-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
