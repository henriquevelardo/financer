import BotaoPadrao from "Componentes/BotaoPadrao";
import Input from "Componentes/Input";
import React, { useState } from "react";

export default function BotaoOperacao({ imagem, alt, operacao }) {
  const [input, setInput] = useState(false);

  const mostraInput = () => {
    setInput(true);
  };

  const escondeInput = () => {
    setTimeout(() => setInput(false), 1)
  }


  return (
    <>
      <span
        onClick={mostraInput}
        className={`btn ${
          operacao === "soma" ? "btn-adicionar" : "btn-remover"
        } ${input ? "btn-large" : ""}`}
      >
        {input ? "" : <img src={imagem} alt={alt} />}
        <fieldset
          className={`${
            input ? "mostra-input" : ""
          }`}
        >
          <Input type={"text"} id={"inputModalNome"}>
            Digite o nome:
          </Input>
          <Input type={"number"} id={"inputModalValor"}>
            Digite o valor:
          </Input>
          <BotaoPadrao onClick={escondeInput}> Salvar</BotaoPadrao>
        </fieldset>
      </span>
    </>
  );
}
