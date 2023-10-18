/*  basic  tutorial

const amount=12 ;
if(amount<10){
    console.log('small number');
}
else{
    console.log('large number');
}
console.log('hey it my first node app!!!')
*/

/*
 running code
console.log(__dirname);
setInterval(() => {
    console.log('hello  world')
}, 1000);
/*

const name= require('./4-name')
const sayHi=require('./5-utlis')
const data= require('./6-alternative')
require('./7-mind-grenade');
 console.log(data)
 console.log(name);

 sayHi('susan');
 sayHi(name.john);
 sayHi(name.peter); 

*/

const _=require('lodash');
const items= [1, [2, [3, [4]]]]

const newItems=_.flattenDeep(items);
console.log(newItems);