import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Formulario from "Componentes/Formulario";
import React, { useState } from "react";

const corBotao = {
  entradas: 'var(--verde)',
  saidas: 'var(--vermelho)'
}

const BotaoOperacaoEstilizado = styled.span`
  width: 60px;
  height: 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  background-color: ${(props) => props.estilo};
  

  .btn-large {
    width: 97%;
    height: 70%;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .btn-adicionar img {
    height: 3rem;
  }

  form {
    display: none;
  }

  .mostra-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 2px;
  }
`;

export default function BotaoOperacao({ variante, imagem, alt, operacao}) {
  const [formulario, setFormulario] = useState(false);
  const estilo = corBotao[variante]

  const mostraFormulario = () => {
    setFormulario(true);
  };

  return (
    <>
      <BotaoOperacaoEstilizado
        estilo={estilo}
        onClick={mostraFormulario}
        className={`btn ${
          operacao === "entradas" ? "btn-adicionar" : "btn-remover"
        } ${formulario ? "btn-large" : ""}`}
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
