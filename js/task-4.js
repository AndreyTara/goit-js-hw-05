/**
 * Функція має використовувати ланцюжок виклику методів та повертати
 * загальний баланс користувачів (властивість balance), стать яких (властивість gender)
 * збігається зі значенням параметра gender.
 * @param {Array<Object>} users  - Масив об’єктів користувачів.
 * @param {String} gender  - рядок, що зберігає стать.
 * @returns {Number} balance - результат розрахунку балансу .
 */

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => {
      return user.gender === gender;
    })
    .reduce((acc, cur) => {
      acc += cur.balance;
      return acc;
    }, 0);
};

console.log('Задача 4. Загальний баланс');
// У консоль будуть виведені результати її роботи.
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];
console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
