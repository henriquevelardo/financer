import React, { Children } from 'react'
import "./BotaoPadrao.css"

export default function sBotaoPadrao({children, onClick, type}) {

  return (
    <button className="btn-padrao" onClick={onClick} type={type} >
        {children}
    </button>
  )
}
