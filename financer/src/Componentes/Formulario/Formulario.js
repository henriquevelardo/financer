import React, { useEffect, useState } from "react";
import Input from "Componentes/Input";
import BotaoPadrao from "Componentes/BotaoPadrao";
import { recebeInputs, enviaInputs } from "Componentes/Api/Api";

export default function Formulario({ formulario, setFormulario, operacao }) {
  const [inputNome, setInputNome] = useState([]);
  const [inputValor, setInputValor] = useState([]);
  const [dados, setDados] = useState([]);


  console.log(dados)

  const escondeFormulario = () => {
    setTimeout(() => setFormulario(false), 50);
  };

  useEffect(() => {
    const requisicaoApi = async () => {
      const resposta = await recebeInputs();
      setDados(resposta);
    };

    
    requisicaoApi();
  }, []);

  

  const aoSalvar = async(event) => {
    event.preventDefault();
    const novosDados = { [inputNome]: inputValor };

    delete novosDados.id

    await enviaInputs(...dados, novosDados)

    setInputNome("");
    setInputValor("");
  };

  

  return (
    <form onSubmit={aoSalvar} className={`${formulario ? "mostra-input" : ""}`}>
      <Input
        type={"text"}
        id={"inputModalNome"}
        valor={inputNome}
        digitaValor={(inputNome) => setInputNome(inputNome)}
      >
        Digite o nome:
      </Input>
      <Input
        type={"number"}
        id={"inputModalValor"}
        valor={inputValor}
        digitaValor={(inputValor) => setInputValor(inputValor)}
      >
        Digite o valor:
      </Input>
      <BotaoPadrao type="submit" onClick={escondeFormulario}>
        Salvar
      </BotaoPadrao>
    </form>
  );
}
