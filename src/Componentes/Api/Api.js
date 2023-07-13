export const recebeInputs = async() => {
    const request = await fetch(`http://localhost:5000/mes/1`)
    const resposta = await request.json()

    return resposta.entradas
}

export const enviaInputs = async(dados) => {
    const request = await fetch(`http://localhost:5000/mes/1`, {
        method: 'PATCH', 
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({entradas: dados})
    })

    const resposta = await request.json()
    return resposta.entradas
}