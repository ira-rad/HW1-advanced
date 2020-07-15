const bread = 15.678;
const sausage = 123.965;
const juice = 90.2345;

const maxPrice = Math.max(bread, sausage, juice);
console.log(maxPrice);

const minPrice = Math.min(bread, sausage, juice);
console.log(minPrice);

const sumPrice = bread + sausage + juice;
console.log(sumPrice);

const breadPriceWithoutPenni = Math.floor(bread);
console.log(breadPriceWithoutPenni);

const sausagePriceWithoutPenni = Math.floor(sausage);
console.log(sausagePriceWithoutPenni);

const juicePriceWithoutPenni = Math.floor(juice);
console.log(juicePriceWithoutPenni);

const sumWithoutPenni = Math.floor(bread + sausage + juice);
console.log(sumWithoutPenni);

const sumToHundreds = Math.round(Math.round(sumPrice)/100) * 100;
console.log(sumToHundreds);


const num = sumWithoutPenni % 2 === 0 ? 'Парне' : 'Не парне';
console.log(num);

const cash = 500;
const rest = (cash - sumPrice).toFixed(2);
console.log(rest);

const averageValue =  sumPrice / 3;
const averageValue1 = averageValue.toFixed(2);
console.log(averageValue1);

const discount = (Math.random() * 100);
const cost = sumPrice / 2;
const profit = (cost - discount).toFixed(2);
console.log(profit);

const row = `
Максимальне значення:${maxPrice};
Мінімальне значення:${minPrice};
Сума товарів:${sumPrice};
Ціна bread без копійок:${breadPriceWithoutPenni};
Ціна sausage без копійок:${sausagePriceWithoutPenni};
Ціна juice без копійок:${juicePriceWithoutPenni};
Сума товарів без копійок:${sumWithoutPenni};
Сума округлена до сотень:${sumToHundreds};
Парне чи не парне число:${num};
Решта від 500 грн:${rest};
Середнє значення цін:${averageValue1};
Чистий прибуток:${profit};
`
console.log(row);

const container=document.querySelector("#getElementById");
container.innerHTML=`
<p>Максимальне значення:${maxPrice}</p>
<p>Мінімальне значення:${minPrice}</p>
<p>Сума товарів:${sumPrice}</p>
<p>Ціна bread без копійок:${breadPriceWithoutPenni}</p>
<p>Ціна sausage без копійок:${sausagePriceWithoutPenni}</p>
<p>Ціна juice без копійок:${juicePriceWithoutPenni}</p>
<p>Сума товарів без копійок:${sumWithoutPenni}</p>
<p>Сума округлена до сотень:${sumToHundreds};</p>
<p>Парне чи не парне число:${num};</p>
<p>Решта від 500 грн:${rest}</p>
<p>Середнє значення цін:${averageValue1}</p>
<p>Чистий прибуток:${profit}</p>

`
