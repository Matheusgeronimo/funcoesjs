let numero1 = 5;
let numero2 = 20;
let pi = Math.PI;

console.log(pi);

let ac = areaCirculo(numero1);
console.log(`A area é ${ac}cm²`);
 
function areaCirculo(raio = 1){
console.log(raio);
return Math.PI * (raio ** 2);



}
