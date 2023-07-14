import React from "react";
import "./Modal.css";
import setaVertical from "assets/Line 1.svg";
import setaHorizontal from "assets/Line 2.svg";
import BotaoOperacao from "Componentes/BotaoOperacao";
import imagemAdicionar from "assets/Plus Math.svg";
import imagemSubtrair from "assets/Subtract.svg";
import BotaoPadrao from "Componentes/BotaoPadrao";

export default function Modal({ abreModal, fechaModal, mes }) {
  return (
    <section className={`modal ${abreModal ? "modal--ativo" : ""}`}>
      <div className="modal__mes">
        <h2 className="modal__mes___titulo">{mes.nome}</h2>
        <div className="modal__infos">
          <h3 className="modal__operacao modal__operacao-entrada">Entradas</h3>

          <h3 className="modal__operacao modal__operacao-saida">Saídas</h3>
          <img src={setaVertical} alt="" className="seta-esquerda" />

          <ul className="modal__valor modal__valor-entrada">
            {mes.entradas &&
              mes.entradas.map((entrada, index) => {
                return <li key={index}>{entrada.salario}</li>;
              })}
          </ul>

          <ul className="modal__valor modal__valor-saida">
            {mes.saidas &&
              mes.saidas.map((saida, index) => {
                return <li key={index}>{saida.comida}</li>;
              })}
          </ul>
        </div>
        <div className="btn__container">
          <div className="btn__operacao">
            <BotaoOperacao
              imagem={imagemAdicionar}
              alt="Sinal de soma"
              operacao={"entradas"}
              variante="entradas"
            />
          </div>
          <div className="btn__operacao">
            <BotaoOperacao
              imagem={imagemSubtrair}
              alt="Sinal de subtração"
              operacao={"saidas"}
              variante="saidas"
            />
          </div>
        </div>
      </div>
      <img src={setaHorizontal} alt="" className="seta-baixo" />
      <div className="modal__total">
        <p className="modal__total___valor">0,00</p>
        <div className="modal__total___infos">
          <BotaoPadrao onClick={fechaModal}> Voltar </BotaoPadrao>
          <BotaoPadrao> Detalhes </BotaoPadrao>
        </div>
      </div>
    </section>
  );
}
