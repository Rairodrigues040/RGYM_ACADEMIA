import React from "react";
import "./Depoimentos.css";
import Rafaela from '../img/rafaela.png'
const Depoimentos = () => {
  return (
    <div className="container-v6">
      <div className="depoimentos">
        <h2>
          <span>DEPOIMENTOS</span> DOS ASSINANTES
        </h2>
        <div className="linha-planos"></div>
        <div className="legenda-depoimento">
          <p>
            Confira o que nossos membros têm a dizer sobre sua experiência na
            RGYM
          </p>
        </div>
      </div>

      <div className="cards-depoimentos">
  <div className="card-depoimento">
    <div className="cabecalho-depoimento">
      <img src={Rafaela} alt="Rafael Silva" className="foto-perfil" />
      <div className="info-perfil">
        <h3>Rafael Silva</h3>
        <p className="tempo-membro">Membro há 2 anos</p>
        <div className="estrelas">★★★★★</div>
      </div>
    </div>
    <p className="texto">
      "Desde que comecei a treinar na RGYM, minha vida mudou completamente.
      Os treinadores são incríveis e me ajudaram a atingir objetivos que eu nunca pensei que seriam possíveis!"
    </p>
  </div>

  <div className="card-depoimento">
    <div className="cabecalho-depoimento">
      <img src={Rafaela} alt="Carla Mendes" className="foto-perfil" />
      <div className="info-perfil">
        <h3>Carla Mendes</h3>
        <p className="tempo-membro">Membro há 1 ano</p>
        <div className="estrelas">★★★★★</div>
      </div>
    </div>
    <p className="texto">
      "A estrutura da academia é incrível, equipamentos sempre limpos e modernos.
      O ambiente é motivador e os treinadores realmente se importam com seu progresso."
    </p>
  </div>

  <div className="card-depoimento">
    <div className="cabecalho-depoimento">
      <img src={Rafaela} alt="Pedro Oliveira" className="foto-perfil" />
      <div className="info-perfil">
        <h3>Pedro Oliveira</h3>
        <p className="tempo-membro">Membro há 6 meses</p>
        <div className="estrelas">★★★★★</div>
      </div>
    </div>
    <p className="texto">
      "Melhor academia que já frequentei! Estava procurando um lugar para treinar 24h e encontrei muito mais.
      A comunidade é incrível e os resultados apareceram rapidamente."
    </p>
  </div>
</div>
    </div>
  );
};

export default Depoimentos;
