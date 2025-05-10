import React from 'react'
import './Servicos.css'
import Musculacao from'../img/musculacao.png'
import MuayThai from '../img/muayTay.png'
import FitDance from '../img/fitDance.png'
import KravMaga from '../img/kravMaga.png'
import Forro from '../img/forro.png'
import Funcional from '../img/funcional.png'

const Servicos = () => {
  return (
    <div className="container-v4">
        <div className="section-3">
            <div className="nossos-servicos">
                <h2>NOSSOS <span>SERVIÇOS</span></h2>
                <div className="linha"></div>
                    <div className="legenda">
                    <p>Conheça nossa equipe de profissionais altamente qualificados para te ajudar a alcançar seus objetivos.</p>
                </div>
            </div>

            <div className="reparticoes-servicos">
                <div className="musculacao">
                    <img src={Musculacao} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>Musculação</h3>
                        <p className="especialidade">Força, definição e saúde</p>
                        <p className="descricao">
                            Nosso treino de musculação é focado em resultados reais, com acompanhamento profissional e estrutura completa para todos os níveis. Comece hoje e supere seus limites!
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>

                <div className="musculacao">
                    <img src={MuayThai} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>Muay Thai</h3>
                        <p className="especialidade">Desperte o guerreiro que existe em você</p>
                        <p className="descricao">
                        Aprenda técnicas de defesa pessoal, melhore seu condicionamento físico e alivie o estresse com nossos treinos intensos de Muay Thai.
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>


                <div className="musculacao">
                    <img src={FitDance} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>FIT DANCE</h3>
                        <p className="especialidade">Mexa o corpo e divirta-se</p>
                        <p className="descricao">
                        Queime calorias, aumente o condicionamento físico e sinta a energia positiva das coreografias envolventes. Ideal para todas as idades e níveis!
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>

                <div className="musculacao">
                    <img src={KravMaga} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>KRAV MAGA</h3>
                        <p className="especialidade">Defenda-se com eficiência e confiança</p>
                        <p className="descricao">
                        Aprenda técnicas práticas de defesa pessoal com foco em situações reais. Desenvolva autocontrole, agilidade e segurança em cada movimento.
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>

                <div className="musculacao">
                    <img src={Forro} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>FORRÓ</h3>
                        <p className="especialidade">Mexa o corpo e divirta-se</p>
                        <p className="descricao">
                        Com força, garra e muito foco, cada treino é uma nova conquista. No ritmo do forró, superamos nossos limites e avançamos em direção aos nossos objetivos.
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>

                <div className="musculacao">
                    <img src={Funcional} alt="Musculação" />
                    <div className="conteudo-musculacao">
                        <h3>FUNCIONAL</h3>
                        <p className="especialidade">Transforme esforço em evolução</p>
                        <p className="descricao">
                        Movimente-se com intensidade, desafie seus limites e vença cada obstáculo. No treino funcional, o seu corpo é o seu melhor aliado!
                        </p>
                        <a href="#" className="cta">Agende um treino →</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicos
