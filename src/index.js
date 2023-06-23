const btn = document.querySelector("[data-js='btn']")
const form = document.querySelector("[data-js='form']")

const getFormElement = (event) => (elementName) =>{
    return event.target.elements[elementName].value
}

function tableAdd(arr){
    const table_body = document.querySelector("[data-js='table_body_element']")
    const tr = document.createElement('tr')
    arr.forEach(e => {
        if(e.type==='text'){
            const td = document.createElement('td')
            td.textContent = e.value
            tr.appendChild(td)
        }else if(e.type==='img'){
            const td = document.createElement('td')
            const img = document.createElement('img')
            img.src=e.value
            img.alt='teste'
            td.appendChild(img)
            tr.appendChild(td)
        }
        
    })
    table_body.appendChild(tr)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const getElement = getFormElement(e)

    const customer = getElement('customer')
    const location = getElement('location')
    const order = getElement('order')
    const amount = getElement('amount')
    const url = getElement('url')
    const status = getElement('status')

    tableAdd([
        {type:'text',value:customer},
        {type:'img',value:url},
        {type:'text',value:location},
        {type:'text',value:order},
        {type:'text',value:status},
        {type:'text',value:amount}
    ])
    e.target.reset()
})

const masks = {
    inputOrder (v){
        console.log(v)
        return v
    }
}

document.querySelectorAll('input').forEach(($input) => {
const field = $input.dataset.js
console.log(field)
$input.addEventListener('input', (e) => {
    e.target.value = masks[field](e.target.value)
},false)
})