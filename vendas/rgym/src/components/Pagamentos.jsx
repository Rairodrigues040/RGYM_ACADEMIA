import React from 'react'
import './Pagamentos.css'
import { IoCheckmarkSharp } from "react-icons/io5";


const Pagamentos = () => {
  return (
    <div className="container-v5">
        <div className="section-4">
            <div className="nossos-planos">
                <h2>NOSSOS <span>PLANOS</span></h2>
                <div className="linha-planos"></div>
                    <div className="legenda-planos">
                    <p>Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de transformação hoje mesmo</p>
                </div>
            </div>

            <div className="reparticoes-servicos-planos">
                <div className="card-basico">
                    <div className="preco-basico">
                        <h3>BÁSICO</h3>
                        <p>R$89,90 <span>/mês</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso à musculação</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Horário comercial</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Acompanhamento básico</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>App de treinos</p>
                    </div>
                    <div className="escolher-plano-basico"><a href="#">Escolher Plano</a></div>
                </div>

                <div className="card-premium">
                    <div className="destaque-popular">
                        <p>POPULAR</p>
                    </div>

                    <div className="preco-premium">
                        <h3>PREMIUM</h3>
                        <p>R$129,90 <span>/mês</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso 24/7</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Todas as modalidades</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Treinador exclusivo</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Avaliação física mensal</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>App premium de treinos</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso a todas as unidades</p>
                    </div>
                    <div className="escolher-plano"><a href="#">Escolher Plano</a></div>
                </div>

                <div className="card-basico">
                    <div className="preco-basico">
                        <h3>FAMÍLIA</h3>
                        <p>R$199,90 <span>/mês</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Até 3 pessoas</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso 24/7</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Todas as modalidades</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Treinador compartilhado</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>App de treinos</p>
                    </div>
                    <div className="escolher-plano-basico"><a href="#">Escolher Plano</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagamentos
