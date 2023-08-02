import dadosMeses from "json/meses.json";
import Modal from "Componentes/Modal";
import { useEffect, useState } from "react";
import CardMes from "Componentes/CardMes";
import styled from "@emotion/styled";

const MesesEstilizado = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(6, auto);
  column-gap: 0.1rem;
  row-gap: 0.7rem;
  padding: 0.7rem 0.3rem;
`;

export default function Meses() {
  const [mostraModal, setMostraModal] = useState(false);
  let [mesClicado, setMesClicado] = useState("");
  const [meses, setMeses] = useState([]);

  useEffect(() => {
    setMeses([dadosMeses]);
  }, []);

  const ativaModal = (mes) => {
    setMostraModal(!mostraModal);
    mesClicado = mes;
    setMesClicado(mesClicado);
  };

  return (
    <>
      <Modal abreModal={mostraModal} mes={mesClicado} fechaModal={ativaModal} />
      <MesesEstilizado >
        {meses.map((item) => (
          <CardMes
            key={item.mes.id}
            mes={item.mes}
            manipulaModal={ativaModal}
          />
        ))}
      </MesesEstilizado>
    </>
  );
}
