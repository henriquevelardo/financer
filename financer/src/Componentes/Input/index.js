import React, { useState } from "react";
import "./Input.css"

export default function Input({children, type, id, value, onChange}) {
  const [nomeInput, setNomeInput] = useState()
  const [valorInput, setValorInput] = useState()

  

  return (
    <div className="input">
      <input type={type} id={id} placeholder={children} value={value} onChange={onChange}/>
    </div>
  );
}
