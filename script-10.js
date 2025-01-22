// не совсем понял как реализовать данную идею. в условии сказано взять число из 8 задания. в 8 задании масксимальное число 31. а суть 10 задания, как я понял, есть число от 1 до 366/365 и код выдает какой это месяц и пора года. и не понял как объединить сразу if else и switch, чтобы отрабатывали вместе

let Day10 = prompt ('введите число от 1 до 366')

if (Day10 > 0 && Day10 <= 31) {
    let Day10 = 1;
    console.log('Ваш месяц Январь');
} else if (Day10 > 31 && Day10 <= 60) {
    let Day10 = 2;
    console.log('Ваш месяц Февраль');
} else if (Day10 > 60 && Day10 <= 91) {
    let Day10 = 3;
    console.log('Ваш месяц Март');
} else if (Day10 > 91 && Day10 <= 121) {
    let Day10 = 4;
    console.log('Ваш месяц Апрель');
} else if (Day10 > 121 && Day10 <= 152) {
    let Day10 = 5;
    console.log('Ваш месяц Май');
} else if (Day10 > 152 && Day10 <= 182) {
    let Day10 = 6;
    console.log('Ваш месяц Июнь');
} else if (Day10 > 182 && Day10 <= 213) {
    let Day10 = 7;
    console.log('Ваш месяц Июль');
} else if (Day10 > 213 && Day10 <= 244) {
    let Day10 = 8;
    console.log('Ваш месяц Август');
} else if (Day10 > 244 && Day10 <= 274) {
    let Day10 = 9;
    console.log('Ваш месяц Сентябрь');
} else if (Day10 > 274 && Day10 <= 305) {
    let Day10 = 10;
    console.log('Ваш месяц Октябрь');
} else if (Day10 > 305 && Day10 <= 335) {
    let Day10 = 11;
    console.log('Ваш месяц Ноябрь');
} else if (Day10 > 335 && Day10 <= 366) {
    let Day10 = 12;
    console.log('Ваш месяц Декабрь');
} else {
    console.log('Упс, кажется кто-то невнимательно прочитал условие :(')
}



switch(Day10) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
            
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
}




