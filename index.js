// промисификация
// const toShowDelay = function (delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // из промиса нельзя вытащить его результат напрямую!
//       console.log(resolve(delay));
//     }, delay);
//   });
//   console.log(delay);
//   return promise;
// };

// const logger = (ms) => console.log(`Функция выполнилась с задерржкой  ${ms}`);
// toShowDelay(0).then(logger);
// toShowDelay(5000).then(logger);
// toShowDelay(2000).then(logger);
// toShowDelay(3000).then(logger);
// toShowDelay(4000).then(logger);
// console.log(toShowDelay(0));

// const students = [
//     {
//         name: "user1",
//         student: true,
//         age: 24,
//     },
//     {
//         name: "user2",
//         student: true,
//         age: 22,
//     },
//     {
//         name: "user3",
//         student: false,
//         age: 23,
//     },
// ];
// const updateStudentStatus = function (arr, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const newStudent = arr.find((elem) => {
//         if (elem.name === name) {
//           !elem.student;
//           resolve(elem);
//           //   return elem;
//         } else {
//           reject(`такого студента нет`);
//         }
//       });
//     }, 0);
//   });
// };
// function toShowStudent(students) {
//   console.log(students);
// }

// updateStudentStatus(students, "user1").then(toShowStudent);
// updateStudentStatus(students, "user4")
//   .then(toShowStudent)
//   .catch((error) => console.log(error));

// const students = [
//   {
//     name: "user1",
//     student: true,
//     age: 24,
//   },
//   {
//     name: "user2",
//     student: true,
//     age: 22,
//   },
//   {
//     name: "user3",
//     student: false,
//     age: 23,
//   },
// ];
// const toSeachStudent = function (arr, min, max) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const newArr = arr.filter(
//         (student) => student.age >= min && student.age <= max
//       );
//       if (newArr.length) {
//         res(newArr);
//       } else {
//         rej(`Нет подходящих студентов`);
//       }
//     }, 0);
//   });
// };
// const toShowStudents = function (elem) {
//   console.log(elem);
// };
// const greeting = function () {
//   console.log("hello");
// };
// toSeachStudent(students, 22, 23).then(toShowStudents).finally(greeting);
// toSeachStudent(students, 30, 31)
//   .then(toShowStudents)
//   .catch((error) => console.error(error))
//   .finally(greeting);

const product1 = {
  id: 1,
  price: 100,
  count: 2,
};
const product2 = {
  id: 2,
  price: 200,
  count: 5,
};
const product3 = {
  id: 3,
  price: 300,
  count: 7,
};
const product4 = {
  id: 4,
  price: 400,
  count: 10,
};
// const toGetSumm = function (obj, num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (obj.count >= num) {
//         obj.price * num;
//         res(obj.price * num);
//       } else {
//         rej(`У этого продукта ${obj.id} ${obj.count} осталось `);
//       }
//     }, 1000);
//   });
// };
// const log = function (summ) {
//   console.log(`Сумма вашего заказа ${summ}`);
// };
// toGetSumm(product3, 6).then(log);
// toGetSumm(product3, 10).then(log);

const toGetSumm = function (obj) {
  let num = Math.floor(Math.random() * (20 - 1) + 1);
  let ms = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
  console.log(ms);
  console.log(num);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (obj.count >= num) {
        obj.price * num;
        res({ sum: obj.price * num, delay: ms });
      } else {
        rej(obj);
      }
    }, ms);
  });
};
const errLog = function ({ id, count }) {
  console.log(`В данном объекте ${id} осталось ${count} единиц`);
};
const esLog = function ({ sum, delay }) {
  console.log(`Ваш заказ на ${sum} будет выполнен через ${delay} милисекунд`);
};
toGetSumm(product4, 1000).then(esLog).catch(errLog);
toGetSumm(product3, 3000).then(esLog).catch(errLog);
console.log(toGetSumm(product3, 1000));
