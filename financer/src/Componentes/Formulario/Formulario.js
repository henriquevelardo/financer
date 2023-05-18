import React from "react";
import Input from "Componentes/Input";
import BotaoPadrao from "Componentes/BotaoPadrao";

export default function Formulario({ formulario, setFormulario }) {
  
    const escondeFormulario = (event) => {
    event.preventDefault();
    setTimeout(() => setFormulario(false), 50);
  };

  return (
    <form className={`${formulario ? "mostra-input" : ""}`}>
      <Input
        type={"text"}
        id={"inputModalNome"}
        onChange={(event) => event.target.value}
      >
        Digite o nome:
      </Input>
      <Input
        type={"number"}
        id={"inputModalValor"}
        onChange={(event) => event.target.value}
      >
        Digite o valor:
      </Input>
      <BotaoPadrao type="submit" onClick={escondeFormulario}>
        Salvar
      </BotaoPadrao>
    </form>
  );
}
