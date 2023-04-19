import './Nav.css';

export default function Nav({ menu }) {

    console.log(menu)

  return (
    <nav className={`nav ${menu == true ? "nav--ativo" : ""}`}>
      <ul className="nav__lista">
        <li className="nav__lista-item nav__lista-item--ativo">
          <i className="home"></i>Inicio
        </li>
        <li className="nav__lista-item">
          <i className="calendar"></i>Balanço Mensal
        </li>
        <li className="nav__lista-item">
          <i className="calendar"></i>Balanço Anual
        </li>
        <li className="nav__lista-item">
          <i className="exchange"></i>Entradas/Saídas
        </li>
      </ul>
    </nav>
  );
}
