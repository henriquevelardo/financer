import styled from "@emotion/styled";
import { css } from "@emotion/css";

const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: flex-end;

  padding: 2.3rem 0.5rem 0.5rem 0;

  ${
    css`
      &.info__rodape {
        font-size: 100px;
        color: rgba(255, 255, 255, 0.2);
      }
    `
  }

`;

export default function Footer() {
  return (
    <FooterEstilizado>
      <p className="info__rodape">©Copyright 2023 - Financer</p>
    </FooterEstilizado>
  );
}
