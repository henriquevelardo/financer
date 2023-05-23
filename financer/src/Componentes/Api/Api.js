export const recebeInputs = async() => {
    const request = await fetch(`http://localhost:3001/mes`)
    const resposta = await request.json()

    return resposta
}

export const enviaInputs = async(dados) => {
    const request = await fetch(`http://localhost:3001/mes`, {
        method: "POST", 
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(dados)
    })

    const resposta = await request.json()
    return resposta
}