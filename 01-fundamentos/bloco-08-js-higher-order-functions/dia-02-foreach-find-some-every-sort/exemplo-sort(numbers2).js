// Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]