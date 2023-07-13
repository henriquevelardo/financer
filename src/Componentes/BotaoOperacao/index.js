import Formulario from "Componentes/Formulario";
import React, { useState } from "react";

export default function BotaoOperacao({ imagem, alt, operacao }) {
  const [formulario, setFormulario] = useState(false);

  const mostraFormulario = () => {
    setFormulario(true);
  };

  return (
    <>
      <span onClick={mostraFormulario} className={`btn ${ operacao === "entradas" ? "btn-adicionar" : "btn-remover"} ${formulario ? "btn-large" : ""}`}>
        {formulario ? "" : <img src={imagem} alt={alt} />}
        <Formulario formulario={formulario} setFormulario={setFormulario} operacao={operacao}/>
      </span>
    </>
  );
}
