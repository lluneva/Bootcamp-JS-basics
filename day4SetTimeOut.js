let name = 'Tom';
let name1 = 'Elsa';

setTimeout(function() {
    name = 'Walter'
    console.log(name)
},2000)

console.log(name)

setTimeout(function() {
    name1 = 'Lola'
    console.log(name1)
},100)

setTimeout(function() {
   
    console.log(name1)
},500)
