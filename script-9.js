let Day = prompt ('введите количество дней');


let staticYear = 365;
let staticMonth = 31;
let staticWeek = 7;
let staticHour = 24;
let staticMinutes = 1440;
let staticSeconds = 8640;


let resultYear = (Day / staticYear + ' лет');
console.log(resultYear);
let resultMonth = (Day / staticMonth + ' месяцев')
console.log(resultMonth);
let resultWeek = (Day / staticWeek + ' недель')
console.log(resultWeek);
let reultHour = (Day * staticHour + ' часов')
console.log(reultHour);
let resultMinutes = (Day * staticMinutes + ' минут')
console.log(resultMinutes);
let resultSeconds = (Day * staticSeconds + ' секунд')
console.log(resultSeconds);

if (Day < staticYear) {
    console.log('Меньше года');
}

if (Day < staticMonth) {
    console.log('Меньше месяца');
}   

if (Day <staticWeek) {
    console.log('Меньше недели');
}




