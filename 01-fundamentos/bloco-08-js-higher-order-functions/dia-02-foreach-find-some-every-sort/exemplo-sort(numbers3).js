// Veja agora se realizarmos uma simples modificação no retorno da função que ordena os números e veja o que acontece:


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]