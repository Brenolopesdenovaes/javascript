let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inlista(n){
    if(valores.indexOf(Number(n)) !=-1){
        return  true
    }else{
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inlista(num.value , valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML =''
    }else{
        window.alert('Valor invalido')
    }
    num.value= ''
    num.focus()
}
function finalizar(){
    if(valores.length ==0){
        window.alert('adicione valores')
    }else{
        let tot= valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores [pos]
            if(valores [pos]>maior)
            maior = valores [pos]
            if(valores[pos]<=menor)
            menor = valores [pos]
        }
        media= soma/tot
        res.innerHTML=''
        res.innerHTML +=`<p>ao todo, temos ${tot} elementos numeros cadastrados </p>`
        res.innerHTML +=`<p>o maior valor foi ${maior}</p>`
        res.innerHTML +=`<p>o menor valor foi ${menor}</p>`
        res.innerHTML +=`<p>a soma dos valores ${soma}</p>`
        res.innerHTML +=`<p>a media dos valores ${media}</p>`
    }
}
