function clickMenu() {
    if (opcoes.style.display == 'block') {
        opcoes.style.display = 'none'
    } else {
        opcoes.style.display = 'block'
    }
}

function novoTamanho(){
    if (window.innerWidth >= 768) {
        opcoes.style.display = 'block'
    } else {
        opcoes.style.display = 'none'
    }
}

const myObserver = new IntersectionObserver ((observar) => {
    observar.forEach((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

})

const elements = document.querySelectorAll('.animacao')

elements.forEach((element) => myObserver.observe(element))