/* Напиши класс Car с указанными свойствами и методами. */

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0
  }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car) {
    const {
      maxSpeed,
      speed,
      isOn,
      distance,
      price
    } = car
    console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`)
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get carPrice() {
    return this.price
  }

  set carPrice(value) {
    this.price = value;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    return this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.speed = 0;
    return (this.isOn = false);
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (value + this.speed > this.maxSpeed) {
      console.log('Скорость выше максимальной')
    }
    console.log(this.speed + value)
    return this.speed += value
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value < 0) {
      console.log('Скорость ниже минимальной')
    }
    return this.speed -= value
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (!this.isOn) {
      console.log('Машина не заведена')
    }
    this.distance = this.distance + this.speed * hours
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50)
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.carPrice); // 2000
mustang.carPrice = 4000;
console.log(mustang.carPrice); // 4000
