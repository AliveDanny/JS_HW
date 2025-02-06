let Calculator = function() {
    this.on = false;

    this.onToggle = () => {
        
    }
    this.get = function() {
        this.a = +prompt('Введите число a')
        this.b = +prompt('Введите число b')
        this.o = prompt('Введите операцию: сложение (+), вычетание (-), умножение (*), деление (/), ')
        this.operation();
    };

    this.operation = function() {
        switch(this.o) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.answer();
    };

    this.answer = function() {
        alert(this.a + ' ' + this.o + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calculator();
calc.get();