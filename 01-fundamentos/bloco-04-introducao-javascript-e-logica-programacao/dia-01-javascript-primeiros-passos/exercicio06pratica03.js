// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 20;
const b = 24;
const c = 19;

if (a > b && a > c) {
    console.log("Maior é " + a);
}
else if (b > a && b > c){
    console.log("Maior é " + b);
}
else if (c > a && c > b) {
    console.log("Maior é " + c);
}

