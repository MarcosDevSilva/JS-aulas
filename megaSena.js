let numerosSorteados = [];
let meuJogo =[5,10,35,48,29,19];
let numeroDeAcertos = 0;


for (let index = 0; index < 6; index += 1 ){
    const numerosAleatorios = Math.floor(Math.random() * 60);
    if(!numerosSorteados.includes(numerosAleatorios)) {
        numerosSorteados.push(numerosAleatorios)
    } else {
        index -=1;
    }
}

for (let indexSorteados = 0; indexSorteados < numerosSorteados.length; indexSorteados +=1) {
    for ( let indexMeujogo = 0; indexMeujogo < meuJogo.length; indexMeujogo +=1){
       if (numerosSorteados[indexSorteados] === meuJogo[indexMeujogo]) {
        numeroDeAcertos +=1
       }
    }
}
console.log(`acertos ${numeroDeAcertos}`)
console.log(`meu jogo ${meuJogo}`)
console.log(`Numeros Sorteados ${numerosSorteados}`)


//parou em 1:19
//testando git