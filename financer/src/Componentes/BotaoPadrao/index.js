import React, { Children } from 'react'
import "./BotaoPadrao.css"

export default function BotaoPadrao({children, onClick}) {

  return (
    <button className="btn-padrao" onClick={onClick} >
        {children}
    </button>
  )
}
