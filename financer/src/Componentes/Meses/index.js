import Mes from "Componentes/Mes";
import meses from "json/meses.json";
import Modal from "Componentes/Modal";
import { useState } from "react";

export default function Meses() {
  const [mostraModal, setMostraModal] = useState(false);
  let [mesClicado, setMesClicado] = useState("");

  const ativaModal = (mes) => {
    setMostraModal(!mostraModal);
    mesClicado = mes;
    setMesClicado(mesClicado);
  };

  return (
    <>
       <Modal 
          abreModal={mostraModal} 
          mes={mesClicado} 
          fechaModal={ativaModal}
        />
      <section className="meses">
        {meses.map((mes) => (
          <Mes key={mes.id} mes={mes} manipulaModal={ativaModal} />
        ))}
      </section>
    </>
  );
}
