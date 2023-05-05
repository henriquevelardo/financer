import Mes from "Componentes/Mes";
import meses from "json/meses.json";
import Modal from "Componentes/Modal";
import { useState } from "react";

export default function Meses() {
  const [mostraModal, setMostraModal] = useState(false);

  const ativaModal = () => {
    setMostraModal(!mostraModal);
    console.log(mostraModal);
  };

  return (
    <>
      <section className="meses">
        {mostraModal ? <Modal manipulaModal={ativaModal} /> : null}
        {meses.map((mes) => (
          <Mes key={mes.id} mes={mes} />
        ))}
      </section>
    </>
  );
}
