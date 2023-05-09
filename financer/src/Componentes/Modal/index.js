import React from "react";
import "./Modal.css";
import setaVertical from "assets/Line 1.svg";
import setaHorizontal from "assets/Line 2.svg";

export default function Modal({ abreModal, fechaModal, mes }) {
  console.log(mes);

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
                return (
                  <li key={index}>{entrada.salario}</li>
                );
              })}
          </ul>

          <ul className="modal__valor modal__valor-saida">
            {mes.saidas && mes.saidas.map((saida, index) => {
              return (
                <li key={index}>{saida.comida}</li>
              )
            })}
          </ul>

        </div>
        <div className="btn__container">
          <button className="btn btn-adicionar">
            <img src="./assets/Plus Math.svg" alt="Sinal de adição" />
          </button>
          <button className="btn btn-remover">
            <img src="./assets/Subtract.svg" alt="Sinal de subtração" />
          </button>
        </div>
      </div>
      <img src={setaHorizontal} alt="" className="seta-baixo" />
      <div className="modal__total">
        <p className="modal__total___valor">0,00</p>
        <div className="modal__total___infos">
          <button className="btn-voltar" onClick={fechaModal}>
            Voltar
          </button>
          <button className="btn-voltar">Detalhes</button>
        </div>
      </div>
    </section>
  );
}
