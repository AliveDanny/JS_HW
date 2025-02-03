const str = 'aa aba abba abbba abca abea';
const regex = /a(b+)a/g;
const result = str.match(regex);
console.log(result);