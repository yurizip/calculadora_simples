//2.Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function conversor(string){
    return parseInt(string);
    console.log('string');
 }
 let string = '34';
 let int = conversor(string);
 console.log(int);
//3.Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
function operar(){
    let opcoes = document.getElementById('opcoes').value;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(opcoes);
    console.log(num1);
    console.log(num2);

    if(opcoes == 'adicao'){
        adicao(num1,num2);
    }else if(opcoes == 'subtracao'){
        subtracao(num1,num2);
    }else if(opcoes == 'divisao'){
        divisao(num1,num2);
    }else{
        multiplicar(num1,num2);
    }
}
function adicao(num1,num2){
    let adicao_op = num1 + num2;
    document.getElementById('resultado').textContent = adicao_op;
}
function subtracao(num1,num2){
    let subtracao_op = num1 - num2;
    document.getElementById('resultado').textContent = subtracao_op;
}
function divisao(num1,num2){
    let divisao_op = num1 / num2;
    document.getElementById('resultado').textContent = divisao_op;
}
function multiplicar(num1,num2){
    let multiplicacao_op = num1 * num2;
    document.getElementById('resultado').textContent = multiplicacao_op;
}
//4.implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
function par_impar(numero){
    if (numero % 2 === 0 ){
        console.log(`${numero} é par`);
    }else{
        console.log(`${numero} é impar`);
    }
}
let numero = 54;
par_impar(numero);
//5.Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar
function conversor_temps(temp,escala){
    if(escala.toLowerCase() === 'celsius' ){
        return (temp * 9/5) + 32;
    }else if(escala.toLowerCase() === 'fahrenheit'){
        return (valor - 32) * 5/9;
    }else{
        console.log('escala invalida');
    }
}
let celcius = 34;
let fahrenheit = conversor_temps(celcius,'celsius');
console.log(fahrenheit);
