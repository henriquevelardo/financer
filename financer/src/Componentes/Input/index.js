import React from "react";
import "./Input.css"

export default function Input({children, type, id}) {
  return (
    <div className="input">
      <input type={type} id={id} placeholder={children} />
    </div>
  );
}
