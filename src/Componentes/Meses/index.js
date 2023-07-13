import dadosMeses from "json/meses.json";
import Modal from "Componentes/Modal";
import { useEffect, useState } from "react";
import CardMes from "Componentes/CardMes";

export default function Meses() {
  const [mostraModal, setMostraModal] = useState(false);
  let [mesClicado, setMesClicado] = useState("");
  const [meses, setMeses] = useState([]);

  useEffect(() => {
    setMeses([dadosMeses])
  }, [])


  const ativaModal = (mes) => {
    setMostraModal(!mostraModal);
    mesClicado = mes;
    setMesClicado(mesClicado);

  };

  return (
    <>
      <Modal abreModal={mostraModal} mes={mesClicado} fechaModal={ativaModal} />
      <section className="meses">
        {meses.map((item) => (
          <CardMes key={item.mes.id} mes={item.mes} manipulaModal={ativaModal} />
        ))}
      </section>
    </>
  );
}
