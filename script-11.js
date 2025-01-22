const marker = '^';
const h = 10;

for (let i = 1; i <= h; i++) {
    let line = '';
    let space = '';

for (let j = 0; j < i * 2 - 1; j++) {
    line += marker
}

for (let j = i; j <= h; j++) {
    space += ' '
}

document.write('<pre style="margin: 0;">' + space + line + '</pre>')
}