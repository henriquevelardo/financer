import React, { useState } from "react";
import "./Input.css"

export default function Input({children, type, id, valor, digitaValor, operacao}) {
  
  const inserirValor = (event) => { 
    digitaValor(event.target.value)
  }

  return (
    <div className="input">
      <input type={type} id={id} placeholder={children} value={valor} onChange={inserirValor} operacao={operacao}/>
    </div>
  );
}
