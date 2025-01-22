let day = 17;

if (day >= 0 && day <=10) {
    console.log('относится к первой декаде');
} else if (day >= 11 && day <=20) {
    console.log('относится ко второй декаде');
} else if (day >= 21 && day <= 31) {
    console.log('относится к третьей декаде');
} else {
    console.log('проверьте выбранное число');
}