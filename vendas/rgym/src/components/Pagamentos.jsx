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
                        <h3>PLANOS MENSAL</h3>
                        <p>R$119,00 <span>/mês</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso apenas à musculação</p>
                    </div>
                    <div className="escolher-plano-basico"><a href="#">Escolher Plano</a></div>
                </div>

                <div className="card-premium">
                    <div className="destaque-popular">
                        <p>POPULAR</p>
                    </div>

                    <div className="preco-premium">
                        <h3>PLANO CLUBE +</h3>
                        <p>R$ 79,00 <span>em 12x</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Musculação</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Todas as modalidades</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Vale por dois dias</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Poder tirar férias</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Tranferência de assinatura</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso por 12 meses</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Várias formas de pagamentos</p>
                    </div>
                    <div className="escolher-plano"><a href="#">Escolher Plano</a></div>
                </div>

                <div className="card-basico">
                    <div className="preco-basico">
                        <h3>PLANO SEMESTRAL</h3>
                        <p>R$ 178,00 <span>/em 3x no cartão</span></p>
                    </div>

                    <div className="beneficios">
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso por 6 meses</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Acesso apenas à musculação</p>
                        <p><IoCheckmarkSharp color='#FECB00'/>Várias formas de pagamentos</p>
                    </div>
                    <div className="escolher-plano-basico"><a href="#">Escolher Plano</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagamentos
