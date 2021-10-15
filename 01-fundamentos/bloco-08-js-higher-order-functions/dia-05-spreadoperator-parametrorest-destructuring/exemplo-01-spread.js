const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 2];

console.log(imc(...patientInfo)); // 20.76