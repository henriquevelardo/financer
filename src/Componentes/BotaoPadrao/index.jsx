import React, { Children } from 'react'
import styled from "@emotion/styled"
// import "./BotaoPadrao.css"

const BotaoEstilizado = styled.button`
  background-color:var(--cinza-padrao); 
  padding: 1rem;
  color: var(--branco);
  font-family: var(--fonte-principal);
  text-align: center;
  font-size: 15px;
  width: 45%;
`

export default function BotaoPadrao({children, onClick, type}) {

  return (
    <BotaoEstilizado className="btn-padrao" onClick={onClick} type={type} >
        {children}
    </BotaoEstilizado>
  )
}
