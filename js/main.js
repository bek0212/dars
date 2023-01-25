const dataBtn = document.querySelector('.btndat')
const dataH1 = document.querySelector('.dataH1')
const dataH2 = document.querySelector('.dataH2')

function data(){
    let vaqt = new Date()
    let kun = vaqt.getDay() 
    if(kun<10){
        kun = "0"+kun
    }
     let oy = vaqt.getMonth()
    let yil = vaqt.getFullYear()
    let soat = vaqt.getHours()
    let minut = vaqt.getMinutes()
    let second = vaqt.getSeconds()
    if(second<10){
        second = "0"+second
    }
    let b = '<br>'
    dataH1.textContent = kun + "." + oy + "."+yil
    dataH2.textContent = soat+ ":"+ minut +":"+ second


    setTimeout( "data()", 1000)
}
function rem(){
    dataH1.textContent = '...'
    dataH2.textContent = '...'
}
const elImg = document.querySelector('.img')
function start(){
    elImg.classList.remove('imganim2')
elImg.classList.add('imganim')

}
function qayt(){
    elImg.classList.remove('imganim')
    elImg.classList.add('imganim2')
}

