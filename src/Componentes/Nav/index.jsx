// import "./Nav.css";
import styled from "@emotion/styled";

const NavEstilizado = styled.nav`
  position: absolute;
  background: ${(props) => props.theme.cores.cinzaPadrao};
  color: var(--branco);
  display: flex;
  flex-direction: column;
  width: 68vw;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  padding: 2rem 0;
  left: -100vw;
  top: 6vh;
  transition: 0.1s;
  z-index: 1;

  &.nav--ativo {
    left: 0vw;
  }

  &.nav-img {
    content: url(../assets/menu.svg);
  }

  & .logo,
  & .ano {
    font-size: 24px;
    color: var(--branco);
  }


  & ul {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 0.5rem;
  }

  & .nav__lista-item--ativo {
    border-left: 3px solid white);
  }

  & .home {
    content: url(../assets/Home.svg);
  }

  & .calendar {
    content: url(../../assets/Calendar.svg);
  }

  & .calendar {
    content: url(../../assets/Calendar.svg);
  }

  & .exchange {
    content: url(../../assets/Exchange.svg);
  }
`;

export default function Nav({ menu }) {


  return (
    <NavEstilizado className={` ${menu === true ? "nav--ativo" : ""}`}>
      <ul>
        <li className="nav__lista-item--ativo">
          <i className="home"></i>Inicio
        </li>
        <li>
          <i className="calendar"></i>Balanço Mensal
        </li>
        <li>
          <i className="calendar"></i>Balanço Anual
        </li>
        <li>
          <i className="exchange"></i>Entradas/Saídas
        </li>
      </ul>
    </NavEstilizado>
  );
}
