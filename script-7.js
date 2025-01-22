let S=2000000,
    p=0.1,
    pMonth=p/12,
    y=5,
    sumMonth=y*12,
    Payment=S*pMonth*(1+pMonth)*sumMonth/((1+pMonth)*sumMonth-1),
    Pereplata=Payment*sumMonth;

console.log('Переплата' + Pereplata + 'рублей')

// закрадываются смутные сомнения, но это единственная адекватная формула, которую я нашел