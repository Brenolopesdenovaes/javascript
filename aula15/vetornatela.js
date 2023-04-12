let valores = [0,9,2,3,5]
valores.sort()
/*for (let pos=0;pos<valores.length;pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}/*/
for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}