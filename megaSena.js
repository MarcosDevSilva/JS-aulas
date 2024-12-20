let numerosSorteados = [];
let meuJogo = [5, 11, 33, 48, 29, 19];
let numeroDeAcertos = 0;
let numerosAcertados = [];

async function loteria() {
    const result = await fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest');
    const data = await result.json();
    numerosSorteados = data.dezenas.map(Number); // Converte os números para tipo `Number`, se necessário
    console.log(`Números Sorteados: ${numerosSorteados}`);
    
    // Verifica os acertos após os números serem sorteados
    for (let indexSorteados = 0; indexSorteados < numerosSorteados.length; indexSorteados += 1) {
        for (let indexMeujogo = 0; indexMeujogo < meuJogo.length; indexMeujogo += 1) {
            if (numerosSorteados[indexSorteados] === meuJogo[indexMeujogo]) {
                numeroDeAcertos += 1;
                numerosAcertados.push(numerosSorteados[indexSorteados]);
            }
        }
    }

    //console.log(`Você acertou ${numeroDeAcertos} número(s): ${numerosAcertados}`);
    console.log(`acertos: ${numeroDeAcertos}`)
    console.log(`meu jogo: ${meuJogo}`)
    console.log(`Numeros Sorteados01: ${numerosSorteados}`)
    console.log(`Numeros quer acertei: ${numerosAcertados}`)
}

// Executa a função
loteria();


//for (let index = 0; index < 6; index += 1 ){
//const numerosAleatorios = Math.floor(Math.random() * 60);
   // if(!numerosSorteados.includes(numerosAleatorios)) {
        //numerosSorteados.push(numerosAleatorios)
   // } else {
        //index -=1;
    //}
//}

//console.log(`acertos ${numeroDeAcertos}`)
//console.log(`meu jogo ${meuJogo}`)
//console.log(`Numeros Sorteados01: ${numerosSorteados}`)
//console.log(`Numeros quer acertei: ${numerosAcertados}`)
//parou em 1:19
//testando git