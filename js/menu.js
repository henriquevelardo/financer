const imagemMenu = document.querySelector("[data-imagemMenu]")
const menu = document.querySelector("[data-menu]")

imagemMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
    imagemMenu.classList.toggle('menu-img')
})