function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bebem.jpg')
            }else if (idade >=10 && idade < 21){
                img.setAttribute('src','imagens/novo.jpg')
            }else if (idade < 50){
                img.setAttribute('src','imagens/macho.jpg')
            }else{
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe.jpg')
            }else if (idade >=10 && idade < 21){
                img.setAttribute('src','imagens/nova.jpg')
            }else if (idade < 50){
                img.setAttribute('src','imagens/macha.jpg')
            }else{
                img.setAttribute('src','imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
        
       
    }
}