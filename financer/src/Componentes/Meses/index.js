import Mes from "Componentes/Mes";
import meses from "json/meses.json";

export default function Meses() {
  return (
    <>
      <section className="meses">
        {meses.map((mes) => (
          <Mes key={mes.id} mes={mes} />
        ))}
      </section>
    </>
  );
}
