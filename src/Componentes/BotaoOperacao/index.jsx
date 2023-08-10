import styled from "@emotion/styled";
import Formulario from "Componentes/Formulario";
import React, { useState } from "react";

const BotaoOperacaoEstilizado = styled.span`
  width: 60px;
  height: 30px;
  border: 1px solid ${props => props.theme.cores.preto};
  border-radius: 40px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  background-color: ${(props) =>
    props.operacao === "entradas"
      ? props.theme.cores.verde
      : props.theme.cores.vermelho};

  &.btn-large {
    width: 95%;
    height: 70%;
    border-radius: 2px;
    box-sizing: border-box;
    display: flex;
  }

  .mostra-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 6px;
  }
`;

export default function BotaoOperacao({ imagem, alt, operacao }) {
  const [formulario, setFormulario] = useState(false);

  const mostraFormulario = () => {
    setFormulario(true);
  };

  return (
    <>
      <BotaoOperacaoEstilizado
        onClick={mostraFormulario}
        className={`${formulario ? "btn-large" : ""}`}
        operacao={operacao}
      >
        {formulario ? "" : <img src={imagem} alt={alt} />}
        <Formulario
          formulario={formulario}
          setFormulario={setFormulario}
          operacao={operacao}
        />
      </BotaoOperacaoEstilizado>
    </>
  );
}
