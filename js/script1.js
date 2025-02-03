// 1
const celsium = 50;
const farenheit = (celsium * 1.8 + 32);
console.log(`Conversion ${celsium}C = ${farenheit}F`);
// 2
const days = 31;
const hours = days * 24;
const minutes = hours * 60;
console.log(`У цьому місяці: Днів:${days},Годин:${hours},Хвилин:${minutes} `);
// 3
const health = 100;
const energy = 100;
console.log(`Здоровя гравця: ${health - 15}, Енергія гравця: ${energy - 50}`);
// 4
const products = 2718;
console.log(`Продукти без знижки ${products} Продукти зі знижкою ${products / 10}`);
// 5
const notanumber = 27.18;
console.log(`Число${notanumber} Заокруглене число ${Math.floor(notanumber)}`);
// 6
const numberKoma = 18.18;
console.log(`Число${numberKoma} Десяткове число ${parseFloat(numberKoma)}`);
// 7
const numberWithKoma = "18.18";
console.log(`Число${numberWithKoma} Ціле число ${parseInt(numberWithKoma)}`);
// 8
const korin = 196;
console.log(`Число${korin} Корінь цього числа ${Math.sqrt(korin)}`);
// 9
const justNumber = 18;
const stringNumber = "27";
console.log(`З рядка в число, результат: ${parseInt(stringNumber)} З числа в рядок, результат:${toString(justNumber)}`);
