const CardModal = document.querySelector("[data-modal]")
const mes = document.querySelectorAll("[data-mes]")
const modalDivisao = document.querySelector("[data-divisao]")
const modalMes = document.querySelector("[data-modal-mes]")
const modalTotal = document.querySelector("[data-modal-total]")
const fundoMain = document.querySelector("[data-main]")



const arrayDosMeses = Array.from(mes)

arrayDosMeses.forEach(mes =>{
    const mesClicado = mes.dataset;
    exibeModal(mes, mesClicado)
})

function exibeModal(mes, mesClicado){
    mes.addEventListener("click", ()=> {
        CardModal.classList.toggle('modal--ativo')
        modalDivisao.style="display:block"
        modalMes.style="display:flex"
        modalTotal.style="display:flex"

        console.log("clicou em:" + mesClicado.mes)

        const tituloMes = document.querySelector("[data-titulo]")
        tituloMes.innerHTML = `${mesClicado.mes}`

    }) 
}

