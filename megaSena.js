let numerosSorteados = [];
let meuJogo =[5,10,35,48,29,19];
let numeroDeAcertos = 0;
let numerosAcertados = [];


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
        numerosAcertados.push(numerosSorteados[indexSorteados])
       }
    }
}
//console.log(`acertos ${numeroDeAcertos}`)
//console.log(`meu jogo ${meuJogo}`)
//console.log(`Numeros Sorteados: ${numerosSorteados}`)
//console.log(`Numeros quer acertei: ${numerosAcertados}`)
let megaSena = [];
async function main() {
    const result = await fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
    const data = await result.json()
    megaSena.push(data.dezenas)

    console.log(megaSena)
    
}
main()

//parou em 1:19
//testando git