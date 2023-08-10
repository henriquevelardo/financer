import styled from "@emotion/styled";


const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 2.3rem 0.5rem 0.5rem 0;
  background: ${props => props.theme.cores.cinzaPadrao};

  & p {
    font-size: 10px;
    color: ${props => props.theme.cores.cinzaSecundario};
  }
  
`;

export default function Footer() {
  return (
    <FooterEstilizado>
      <p>©Copyright 2023 - Financer</p>
    </FooterEstilizado>
  );
}
