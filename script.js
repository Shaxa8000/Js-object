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






















