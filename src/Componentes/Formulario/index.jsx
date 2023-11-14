import React, { useEffect, useState } from "react";
import Input from "Componentes/Input";
import BotaoPadrao from "Componentes/BotaoPadrao";
import { recebeInputs, enviaInputs } from "Componentes/Api/Api";
import styled from "@emotion/styled";

const FormularioEstilizado = styled.form`
  display: none;

`;

export default function Formulario({ formulario, setFormulario, operacao }) {
  const [inputNome, setInputNome] = useState([]);
  const [inputValor, setInputValor] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [saidas, setSaidas] = useState([]);

  const escondeFormulario = () => {
    setTimeout(() => setFormulario(false), 50);
  };

  useEffect(() => {
    const requisicaoApi = async () => {
      const resposta = await recebeInputs();
      setEntradas(resposta);
    };

    requisicaoApi();
  }, []);

  // useEffect(() => {
  //   console.log("Atualização de estado: ", entradas);
  //   if (entradas.length > 0) {
  //     enviaInputs(entradas);
  //   }
  // }, [entradas]);

  const aoSalvar = async (event) => {
    event.preventDefault();
    setInputNome("");
    setInputValor("");
    const novosDados = {
      [inputNome]: inputValor,
    };

    setEntradas([...entradas, novosDados]);
  };

  return (
    <FormularioEstilizado onSubmit={aoSalvar} className={`${formulario ? "mostra-input" : ""}`}>
      <Input
        type={"text"}
        id={"inputModalNome"}
        valor={inputNome}
        digitaValor={(inputNome) => setInputNome(inputNome)}
        operacao={operacao}
      >
        Descrição
      </Input>
      <Input
        type={"number"}
        id={"inputModalValor"}
        valor={inputValor}
        digitaValor={(inputValor) => setInputValor(inputValor)}
        operacao={operacao}
      >
        Valor
      </Input>
      <BotaoPadrao 
      type="submit" 
      onClick={escondeFormulario}
      hierarquia="salvar"
      >
        Salvar
      </BotaoPadrao>
    </FormularioEstilizado>
  );
}