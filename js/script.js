// "use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);
// console.log('test');

// const arr = ['a', 'b', 'c'];

// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };

// // arrObj.b = '1234';
// // console.log(arrObj.b);

// // const result = confirm('Are you here?');
// // console.log(result);

// // const answer = +prompt('Are you 18?', '');
// // console.log(answer+ 5 );
// // const answers = [];
// // answers[0] = prompt('Your name?', '');
// // answers[1] = prompt('Your surname?', '' );
// // answers[2] = prompt('Your age?', '');

// // document.write(answers);

// // let incr = 10,
// //  decr = 10;

// //  incr++;
// //  decr--;
// //   console.log(incr)
// const isChecked = true,
// isClose = true;

// console.log(isChecked && isClose);

const numberMovieDb = +prompt('Сколько фильмов уже посмотрели?', '');

const personaMovieDB ={
    count: numberMovieDb,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answers = prompt('Один из последних просмотренных фильмов?', ''),
 answers2 = prompt ('На сколько оцените его?', ''),
 answers3 = prompt('Один из последних просмотренных фильмов?', ''),
 answers4 = prompt ('На сколько оцените его?', '');

 personaMovieDB.movies[answers] = answers2;
 personaMovieDB.movies[answers3] = answers4;

 console.log(personaMovieDB);