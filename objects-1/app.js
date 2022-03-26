/* Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
  const values = Object.values(employees);

  const maxElement = function (values) {
    return Math.max(...values);
  };

  const bestEmployee = function (employees) {
    let employeeMatch;
    const entries = Object.entries(employees);
    for (let entre of entries) {
      if (entre.includes(maxElement(values))) {
        employeeMatch = entre;
      }
    }
    return employeeMatch;
  };

  return bestEmployee(employees);
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    david: 21,
    lux: 99,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
