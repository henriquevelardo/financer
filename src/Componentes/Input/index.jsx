import styled from "@emotion/styled";


const InputEstilizado = styled.input`
  border-radius: 10px;
  padding: 10px 0px;
  width: 100%;
  font-family: ${props => props.theme.fonte};
  color: ${props => props.theme.cores.corSombra};
  text-align: center;

  &::placeholder {
    font-family: ${props => props.theme.fonte};
    text-align: center;
    font-size: 14px;
  }

`

export default function Input({children, type, id, valor, digitaValor, operacao}) {
  
  const inserirValor = (event) => { 
    digitaValor(event.target.value)
  }

  return (
    <div className="input">
      <InputEstilizado 
        type={type} 
        id={id} 
        placeholder={children} 
        value={valor} 
        onChange={inserirValor} 
        operacao={operacao}
      />
    </div>
  );
}
