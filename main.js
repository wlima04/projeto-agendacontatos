const form = document.getElementById('form')
const inputNome = document.getElementById('inpNome')
const inputNumero = document.getElementById('inpNumero')

let ddd = ''
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    addLinha()
    atualizaTabela()
})

function addLinha() {
    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>+55 ${inputNumero.value}</td>`
    linha += '</tr>'
    linhas += linha
    
    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('corpoTabela')
    corpoTabela.innerHTML = linhas
}