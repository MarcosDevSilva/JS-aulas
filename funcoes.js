//somando os numeros dentro do array
const myFunction = (array) => {
    let myArray = 0;
    for (let index = 0;index < array.length; index +=1 ){
        myArray += array[index]
    } return myArray
}
const errei = [1, 1, 1, 1, 2]
console.log(myFunction(errei))

// percorrendo arrey dentro da funçao
const funcao = () => {
    const arrai =[1, 2, 3, 3, 45, 8];
    for(let index=0; index <arrai.length; index+=1) {
        console.log(arrai[index])
    }
}
funcao()
//aula 54:11