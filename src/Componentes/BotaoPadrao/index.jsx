import styled from "@emotion/styled";

const BotaoEstilizado = styled.button`
  background-color: ${(props) =>
    props.hierarquia === "primaria"
      ? props.theme.cores.cinzaPadrao
      : props.theme.cores.branco};
  padding: 1rem;
  color: ${(props) =>
    props.hierarquia === "primaria"
      ? props.theme.cores.branco
      : props.theme.cores.preto};;
  font-family: ${props => props.theme.fonte};
  text-align: center;
  font-size: 16px;
  width: ${props => props.hierarquia === "salvar" ? "55%" : "45%"};
`;

export default function BotaoPadrao({ children, onClick, type, hierarquia }) {
  return (
    <BotaoEstilizado
      onClick={onClick}
      type={type}
      hierarquia={hierarquia}
    >
      {children}
    </BotaoEstilizado>
  );
}
