import React from "react";
import "./Contatos.css";

const Contatos = () => {
  return (
    <div className="container-v7">
      <div className="contatos">
        <h2>
          ENTRE EM <span>CONTATO</span>
        </h2>
        <div className="linha-planos"></div>
        <div className="legenda-contatos">
          <p>
            Estamos prontos para responder suas dúvidas e ajudar você a iniciar sua jornada de transformação.
          </p>
        </div>
      </div>

      <div className="bloco-contato">
        <h3>Informações de contato</h3>

        <div className="info-item">
          <span className="icon">📍</span>
          <div>
            <strong>Nosso endereço</strong>
            <p>Av. Irmã Maria da Graça, 1650 - Planalto da Catumbela, Russas - CE, 62900-000</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">📞</span>
          <div>
            <strong>Telefone</strong>
            <p>(88) 99255-8104</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">✉️</span>
          <div>
            <strong>E-mail</strong>
            <p>contato@rgym.com.br</p>
          </div>
        </div>
      </div>

      <div className="bloco-horario">
        <h3>Horário de funcionamento</h3>
        <ul className="tabela-horarios">
          <li>
            <span>Segunda a Sexta</span>
            <span className="destaque">5h às 22h</span>
          </li>
          <li>
            <span>Sábado</span>
            <span className="destaque">8h às 11h e 15h às 18h</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contatos;
