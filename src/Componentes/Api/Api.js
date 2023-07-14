export const recebeInputs = async() => {
    const request = await fetch(`https://my-json-server.typicode.com/henriquevelardo/financerAPI/mes`)
    const resposta = await request.json()

    return resposta.entradas
}

export const enviaInputs = async(dados) => {
    const request = await fetch(`https://my-json-server.typicode.com/henriquevelardo/financerAPI/mes`, {
        method: 'PATCH', 
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({entradas: dados})
    })

    const resposta = await request.json()
    return resposta.entradas
}