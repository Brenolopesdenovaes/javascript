let amigo = {
    nome: 'jose',
    sexo: 'm',
    peso: 77.4,
    engordar(p) {
      console.log('engordou')
      this.peso += p
    }
  }
  
  amigo.engordar(2)
  console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
  
  