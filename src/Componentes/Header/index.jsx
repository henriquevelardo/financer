import { Link } from "react-router-dom";
import MenuHamburguer from "../MenuHamburguer";
import styled from "@emotion/styled";


const HeaderEstilizado = styled.header`
  background: ${props => props.theme.cores.cinzaPadrao};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.7rem;
  color: ${props => props.theme.cores.branco};

  .link {
    text-decoration: none;
    color: ${props => props.theme.cores.branco};
  }

  & h1, h2 { 
    font-size: 24px;
  }
`;

export default function Header() {
  return (
    <HeaderEstilizado>
      <MenuHamburguer />
      <Link to="./" className="link">
        <h1>Financer</h1>
      </Link>
      <h2>2023</h2>
    </HeaderEstilizado>
  );
}
