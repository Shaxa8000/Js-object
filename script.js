// let user = {
//     name: "Crystal",
//     age: 30,
//     email: 'shokhbozYakhyaev@gmail.com',
//     location: 'Berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

//<<< Calling user>>

// console.log(user);



//<<< ACCESSING ONE OF THE OBJECT VALUES>>>

//console.log(user.name) => crystal
// console.log(user['name']) => crystal


//<<<< UPDATING OBJECT VALUES>>>

// user.age = 35;
//user['name'] = 'chun li';

// console.log(user.age) => 35 (before it was 30);

// console.log(user['name']) => chun li(now)

// <<<  ADVANTEG OF SQUARE NOTATION>>>

// const key = 'location';
// console.log(user[key]); => Berlin


// << ADDING METHOD TO OBJECT>>>

// let user = {
//   name: 'Crystal',
//   age: 30,
//   email: 'shokhbozYakhyaev@gmail.com',
//   location: 'Berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function () {
//         console.log('user logged in')
//     },

//     logout: function () {
//         console.log('User logged out')
//     },
  
// };

// user.login(); => user logged in
// user.logout(); => user logged out


//<<<< USING THIS KEYWORD >>>

// let user = {
//   name: 'Crystal',
//   age: 30,
//   email: 'shokhbozYakhyaev@gmail.com',
//   location: 'Berlin',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//   login: function () {
//       console.log('user logged in');
//   },

//   logout: function () {
//     console.log('User logged out');
//     },
  
//     logBlogs: function () {
//         console.log('this user written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//       })
//   }
// };

// user.logBlogs(); =>>
//     this user has written the following blogs:
//     why mac & cheese rules
//     10 things to make with marmite


//! NOTE . Above we cannot use arrow function because of this keyword.We must use regular function!



//  MATH OBJECT

// const area = 7.7;

// console.log(Math.round(area)); => 8
// console.log(Math.floor(area)); => 7
// console.log(Math.ceil(area)); => 8
// console.log(Math.trunc(area)); => 7
// console.log(Math.random()); => numbers 0 - 1;


//<<<< REFERENCE VALUES>>>


// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo) => the same  two object results;

// userOne.age = 40;
// console.log(UserOne, userTwo) => Again the same two objects


//<<< OBJECT DESTRUCTURING>>>

// const personOne = {
//     name: 'shaxa',
//     age: 25,
//     address: {
//         city: 'Somewhere else',
//         state: 'one of them'
//     }
// }

// const personTwo = {
//     name: "Sally",
//     age: 32,
//     address: {
//         city: 'Somewhere else',
//         state: 'Another one of them'
//     }
// }

// const { name, age } = personTwo;

// console.log(name); => Sally
// console.log(age); => 32



// const { name: firstName, age } = personTwo;

// console.log(firstName) => Sally 


// const { name: firstName, age, favouriteFood = 'Rice' } = personTwo;

// console.log(favouriteFood) => Rice


// const { name: firstName, ...rest } = personTwo;

// console.log(rest); => Bu holatda nameni consolga chiqarmaydi objectni bowqa elementlarini consolga chiqaradi


//<<< Destructuring nested objects>>>


// const { name: firstName, address: { city } } = personTwo;

// console.log(city) => somewhere else;


//<< COMBINING TWO OBJECTS>>

// const personOne = {
    // name: 'shaxa',
    // age: 25,
    // address: {
        // city: 'Somewhere else',
        // state: 'one of them'
    // }
// }



// const personTwo = {
//   age: 32,
//   favouriteFood: 'Watermelon'
// };

// const personThree = { ...personOne, ...personTwo }

// console.log(personThree) => Bu holatda ikta age key lar bulgani uchun ikkinchi key dagi value ni yani 32 ni birinchi keyga uzlashtirib console ga chiqaradi.Qolgan xamma narsa uz xolicha.


//<<< FUNCTION >>

// const personTwo = {
//   name: 'Sally',
//   age: 32,
//   address: {
//     city: 'Somewhere else',
//     state: 'Another one of them',
//   },
// };


// function printUser(user) {
//     console.log(`name is: ${user.name}, age is: ${user.age}`)
// }

// printUser(personTwo); => name is: Sally, age is: 32.


//<<Destructuring above function>>

// const personTwo = {
//   name: 'Sally',
//   age: 32,
//   address: {
//     city: 'Somewhere else',
//     state: 'Another one of them',
//   },
// };

// function printUser({name, age}) {
//   console.log(`name is: ${name}, age is: ${age}`);
// }

// printUser(personTwo); => exact same result as above.


//<<<< OBJECT METHODS>>>

// user = {
//     name: "shaxa",
//     surname: 'yaxyayev',
//     id: 18,
//     number: 123456789,
//     fullname: function () {
//         console.log(this.name + ' ' + this.surname)
//     }
// }

// user.fullname(); => shaxa yaxyayev





































