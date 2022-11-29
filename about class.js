class Car {
  constructor(params) {
    this.name = 'Auto'
    this.model = params.model
    this.type = params.type
    this.color = params.color
    this.transmision = params.transmision
    this.volume = params.volume
  }

  getCarInfo() {
    console.log(`
    ${this.color} ${this.name} ${this.model}
     Год выпуска: 2022
     Тип кузова: ${this.type}
     Разгон до 100км: ${this.howTime ? this.howTime() : '-'}
     Расходн на 100км: ${this.howLiters ? this.howLiters() : '-'}
     Коробка: ${this.transmision}
     `);
  }
}

class CarCreate extends Car {
  constructor(params) {
    super(params)
  }

  howTime() {
    const time = (this.volume * 3).toFixed(1)
    return `${time}cек`
  }

  howLiters() {
    const liters = (this.volume * 4).toFixed(1)
    return `${liters}л`
  }
}

class BMW extends CarCreate {
  constructor(params) {
    super(params)
    this.name = 'BMW'
    this.model = 'X7'
    this.type = 'Geep'
  }
}

class Audi extends CarCreate {
  constructor(params) {
    super(params)
    this.name = 'Audi'
    this.model = 'A6'
    this.type = 'sedan'
  }
}



const bmw = new BMW({
  color: 'black',
  transmision: 'auto',
  volume: 2.4
})

const audi = new Audi({
  color: 'red',
  transmision: 'auto',
  volume: 1.2
})


bmw.getCarInfo();
audi.getCarInfo();