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
    fechaModal()
})

function exibeModal(mes, mesClicado){
    mes.addEventListener("click", ()=> {
        CardModal.classList.toggle('modal--ativo')
        modalDivisao.style="display:block"
        modalMes.style="display:flex"
        modalTotal.style="display:flex"


        const tituloMes = document.querySelector("[data-titulo]")
        tituloMes.innerHTML = `${mesClicado.mes}`

    }) 
}

function fechaModal() {
    const btnVoltar = document.querySelector("[data-voltar]")
    btnVoltar.addEventListener("click", () =>  CardModal.classList.remove('modal--ativo')
    )
}


