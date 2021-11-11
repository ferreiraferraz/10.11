/*
    Equipe: Vinicius Ocker Fagundes, Gustavo Ferraz, Jonathan Alves
*/
/* Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:
A. Acessar elementos específicos de um array.
B. Modificar cada um dos elementos de um array e imprimi-los no console.
C. Adicionar elementos a um array.
D. Extrair elementos de um array.
E. Comparar elementos de um array com os elementos de outro. */


let array = ["laranja", "limão", "kiwi", "uva"];
//A
console.log(`Posição 2: ${array[2]}`);
//B
array.splice(0, 4, `nodejs`, `Sql`, `mariadb`, `PHP`);
console.log(array);
//C
array.push("ASP");
console.log(array);
//D VISUALIZANDO TODAS AS ARRAYS
for (let index = 0; index < array.length; index++) {
    console.log(`Posição ${index}: ${array[index]}`);
}
//D
array.pop();
console.log(array);
//E
if(array[2] !== array[3]){
    console.log(`${array[2]} é diferente de ${array[3]}`);
}

// 1. let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// R: 5
// 2. let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
// "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
// R: Spiderman
// 3. let str = “una string qualquer”
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
// "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
//R: una string qualquer

// 1. Crie a função imprimirInverso que pega um Array como um argumento e
// imprime cada elemento em ordem reversa no console (você não precisa
// inverter o Array).
function arrayinverso(array) {
   console.log(`Posição 0: ${array[0]}`);
   console.log(`Posição 0: ${array[1]}`);
   console.log(`Posição 0: ${array[2]}`);
   console.log(`Posição 0: ${array[3]}`);
}
console.log(array);
arrayinverso(array);
console.log(array);
// 2. Crie a função inverter que recebe um Array como argumento e retorna um novo
// invertido.
function arrayinverso2(array) { //Deu Certo!
    let tmp = []
    tmp[0] = array[3];
    tmp[1] = array[2];
    tmp[2] = array[1];
    tmp[3] = array[0];
    return tmp;
}
console.log(array);
console.log(arrayinverso2(array));
console.log(array);

//somarArray()
function somaArray(array) {
    let tmp = 0;
    tmp += array[0];
    tmp += array[1];
    tmp += array[2];
    return tmp;
}
let a = [1,2,3];
console.log(somaArray(a));

//Array.join()
function join(array) {
    let tmp = "";
    tmp += array[0];
    tmp += array[1];
    tmp += array[2];
    return tmp;
}
let b = ['a','l','ó'];
console.log(join(b));
//Coleções de Filmes (e mais...)
let c = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
