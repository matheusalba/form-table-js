
function $ (selector) {
    return document.querySelector(selector)
}

function inputAdd(form,arr){
    arr.forEach(element => {
        form.appendChild(element)
    });
}

function classAdd(_class,arr){
    arr.forEach(element =>{
        element.className = _class
    })
}

function form(){
const app = $("[data-js='app']")
const form = $("[data-js='form']")
form.className = 'form'

const inputMarca = document.createElement('input')
inputMarca.placeholder = 'Marca/Modelo'
const inputUrl = document.createElement('input')
inputUrl.placeholder = 'Url/Imagem'
const inputAno = document.createElement('input')
inputAno.placeholder = 'Ano'
const inputPlaca = document.createElement('input')
inputPlaca.placeholder = 'Placa'
const inputCor = document.createElement('input')
inputCor.placeholder = 'Cor'
let arr = [inputMarca,inputAno,inputCor,inputPlaca,inputUrl]

inputAdd(form,arr)
classAdd('input',arr)

const btn = document.createElement('button')
btn.textContent = 'Confirmar'
btn.className = 'btn'
form.appendChild(btn)
}

function table(){
const table = $("[data-js='table']")

}

form()
table()