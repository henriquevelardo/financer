import "./Mes.css";
import { useState } from "react";
import Modal from "Componentes/Modal";

export default function Mes({ mes }) {
  const [mostraModal, setMostraModal] = useState(false);

  const ativaModal = () => {
    setMostraModal(!mostraModal);
    console.log(mostraModal);
  };

  return (
    <>
      <Modal modal={mostraModal} mes={mes} />
      <article className="mes__card" onClick={ativaModal}>
        <h2 className="mes__card-nome">{mes.nome}</h2>
        <div className="mes__card-descricao">
          <div className="mes__card-descricao--infos">
            <p>Entradas</p>
            <p>Saídas</p>
            <p>Total</p>
          </div>
          <img src="assets/divisao.svg" alt="divisão" className="linha" />
          <div className="mes__card-descricao--valor">
            <p>{mes.entradas}</p>
            <p>{mes.saidas}</p>
            <p>{mes.total}</p>
          </div>
        </div>
      </article>
    </>
  );
}
