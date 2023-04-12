var num = [5,8,7,3,2]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem  ${num.length} posiçoes`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('o valor nao foi encontrado')
}else{
console.log(`o valor 8 esta na posiçao ${pos}`)
}