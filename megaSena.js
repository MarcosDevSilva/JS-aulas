let numerosSorteados = [];
let meuJogo =[];


for (let index = 0; index < 6; index += 1 ){
    const numerosAleatorios = Math.floor(Math.random() * 60);
    if(!numerosSorteados.includes(numerosAleatorios)) {
        numerosSorteados.push(numerosAleatorios)
    } else {
        index -=1;
    }
}
console.log(numerosSorteados)

//parou em 1:19
//testando git