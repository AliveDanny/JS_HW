const addZero1 = (day) => day < 10 ? `0${day}` : day;
const addZero2 = (month) => month < 10 ? `0${day}` : month;
let dateNow = new Date ();
document.write(dateNow.toLocaleString('ru'))