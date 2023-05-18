const item = document.querySelectorAll('.box__produtos')
const nomeSobrenome = document.querySelector('#nomesobrenome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const contato = document.querySelectorAll('input[type=radio]')
const botao = document.querySelector('#btn')


botao.addEventListener('click', () =>{
    document.body.classList.toggle("dark-mode")

})


item.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {

        confirm(`Você escolheu  fazer ${elemento.childNodes[1].firstChild.nodeValue} no valor de ${elemento.childNodes[7].firstChild.nodeValue}`) 
    })
})



function informaUser() {
    if (nomeSobrenome.value != "" && email.value != "" && telefone.value != "" ) {
        if (contato[0].checked === true) {
            alert(`Olá ${nomeSobrenome.value}! Vi que deixou uma mensagem para nós, breve retornaremos o contato no seu email:${email.value}`)
    
        } else if (contato[1].checked === true) {
            alert(`Olá ${nomeSobrenome.value}! Vi que deixou uma mensagem para nós, breve retornaremos o contato no seu Telefone:${telefone.value}`)
        } else{
            alert(`Olá ${nomeSobrenome.value}! Vi que deixou uma mensagem para nós, breve retornaremos o contato no seu WhatsApp:${telefone.value}`) 
        }   
    }     
}

