import React from "react";
import setaVertical from "assets/Line 1.svg";
import setaHorizontal from "assets/Line 2.svg";
import BotaoOperacao from "Componentes/BotaoOperacao";
import imagemAdicionar from "assets/Plus Math.svg";
import imagemSubtrair from "assets/Subtract.svg";
import BotaoPadrao from "Componentes/BotaoPadrao";
import styled from "@emotion/styled";

const ModalEstilizado = styled.section`
  &.modal {
    position: absolute;
    background: ${(props) => props.theme.cores.branco};
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: -370% 0 3% 3%;
    height: 760px;
    align-items: center;
    padding: 0.5rem 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
    justify-content: space-between;
    transition: 0.2s;
    box-sizing: border-box;
  }

  &.modal--ativo {
    margin: 3% 0 3% 3%;
  }

  & .modal__mes {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    max-width: 100%;
  }

  & .modal__mes___titulo {
    font-size: 24px;
    text-align: center;
    color: var(--preto);
  }

  & .modal__infos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "operacao-entrada  operacao-saida"
      "seta seta"
      "valor-entrada  valor-saida";

    text-align: center;
  }

  & .modal__operacao,
  .modal__valor {
    font-size: 20px;
  }

  & .modal__operacao-entrada {
    grid-area: operacao-entrada;
  }

  & .seta-esquerda {
    grid-area: seta;
    width: 90vw;
  }

  & .modal__operacao-saida {
    grid-area: operacao-saida;
    margin-right: 1rem;
  }

  &.modal__valor-entrada {
    grid-area: valor-entrada;
    color: ${(props) => props.theme.cores.verde};
    margin-top: 0.5rem;
  }

  & .modal__valor-saida {
    grid-area: valor-saida;
    color: var(--vermelho);
    margin-top: 0.5rem;
  }

  & .seta-baixo {
    display: block;
    position: absolute;
    margin-top: 2.5rem;
  }

  & .btn__container {
    display: flex;
  }

  & .btn__operacao {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    gap: 20%;
    height: 250px;
    width: 100%;
  }

  /* Parte inferior do modal */

  & .modal__total {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.2rem;
    gap: 1.5rem;
    width: 100%;
  }

  & .modal__total___valor {
    color: ${(props) => props.theme.cores.azulSaldo};
    font-size: 20px;
  }

  & .modal__total___infos {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.3rem;
  }
`;

export default function Modal({ abreModal, fechaModal, mes }) {
  return (
    <ModalEstilizado className={`modal ${abreModal ? "modal--ativo" : ""}`}>
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
          <BotaoPadrao onClick={fechaModal} hierarquia="secundaria"> Voltar </BotaoPadrao>
          <BotaoPadrao hierarquia="primaria"> Detalhes </BotaoPadrao>
        </div>
      </div>
    </ModalEstilizado>
  );
}
