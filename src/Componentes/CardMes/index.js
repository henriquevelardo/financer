// import "./Mes.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const CardEstilizado = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.cores.cinzaPadrao};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35); 
  gap: 1rem;
  padding: 1rem 0;
`;

const TituloCard = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.cores.branco};
`;
const DescricaoCard = styled.div`
  display: flex;
`;

const InformacoesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.theme.cores.branco};
  font-size: 14px;
  padding: 0rem 1rem 0rem 0rem;
  gap: 0.5rem;
`;
const ValoresCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.theme.cores.branco};
  font-size: 14px;
  padding-left: 1rem;
  gap: 0.5rem;

  & p:nth-child(1) {
    color: ${(props) => props.theme.cores.verde};
  }

  & p:nth-child(2) {
      color: ${(props) => props.theme.cores.vermelho};
    }

`;

export default function CardMes({ mes, manipulaModal }) {
  return (
    <CardEstilizado onClick={() => manipulaModal(mes)}>
      <TituloCard>Janeiro</TituloCard>
      <DescricaoCard>
        <InformacoesCard>
          <p>Entradas</p>
          <p>Saídas</p>
          <p>Total</p>
        </InformacoesCard>
        <img src="assets/divisao.svg" alt="divisão" className="linha" />
        <ValoresCard>
          <p>100,00</p>
          <p>-100,00</p>
          <p>{mes.total}</p>
        </ValoresCard>
      </DescricaoCard>
    </CardEstilizado>
  );
}
