// var a = 5;
// let b = "Chao moi nguoi";
// console.log(a);
// console.log("ALo huynh day", b);

// const c = 5;
// console.log(c);
// //note nhung gi can biet ve JS
// //1. Bien toan cuc va bien cuc bo
// //2. Bien hang va bien thay doi
// console.log(typeof a);
// console.log(typeof b);

// const d = `Day la bien a = ${a}`;
// console.log(d);
// console.log(typeof a);

//default parameter

//function
// function sum(a, b) {
//   return a + b;
// }

// const e = sum(15, 20);
// console.log(e);

// const arrowFu = (a = 7, b = 6) => {
//   console.log("Day la arrow function");
//   return a + b;
// };

// const f = arrowFu(5, 10);
// console.log("Canh a:", f);

//spread syntax
//kn: ...name cho phép trải các phần tử của 1 mảng thành thuộc tính của object
// const arr = [1, 2, 3, 4, 5];

// console.log(...arr, 6, 7);

//object
//kn: la mot kieu du lieu phuc tap cho phep luu tru nhieu kieu du lieu
const person = {
  name: "Nguyen Van A",
  age: "20",
  address: "Ha Noi",
  email: "huynh@gmail.com",
  "giới tính": "Nam",

  //phương thức
  xinChao() {
    console.log("Xin chao cac ban");
    console.log(this.address);
    return 1;
  },
};

console.log(person["giới tính"]);
console.log(person.xinChao());

const { name, age } = person;
console.log(name, age);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //phương thức
  xinChao() {
    console.log("Xin chao cac ban");
    console.log(this.age);
    return 1;
  }
}

const user1 = new User("Nguyen Manh Huynh", 20);
console.log(user1.name);
console.log(user1.age);
console.log(user1.xinChao());
