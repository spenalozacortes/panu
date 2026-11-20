import { createInterface } from "readline/promises";

function calculateDailyNupecKitten(weight) {
    if (weight < 0.3 || weight > 2) {
        throw new Error("Weight outside of range");
    }

    if (weight <= 0.6) {
        return 30 + (weight - 0.3) * (10 / 0.3);
    } else if (weight <= 1) {
        return 40 + (weight - 0.6) * 50;
    } else {
        return 60 + (weight - 1) * 20;
    }
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const currentWeight = Number(await rl.question('\n¿Cuánto pesa el Panu actualmente en kg? '));
const dailyNupec = calculateDailyNupecKitten(currentWeight);
rl.close();

console.log('\nHaciendo unos cálculos ultra complejos...');

let counter = 0;

const interval = setInterval(() => {
    console.log('Calculando aún...');
    counter++;

    if (counter === 5) {
        clearInterval(interval);
        console.log(`\nActualmente Panu necesita comer ${dailyNupec} g de croquetas Nupec Kitten al día :)\n`);
    }
}, 2000);
