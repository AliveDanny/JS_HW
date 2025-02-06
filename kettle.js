const Kettle = function (power, volume, amount) {
    this.power = power;
    this.volume = volume;
    this.amount = amount;
    this.on = false;
    this.bolingTime = 300;
    this.curentBolingTime = 0;

    const timerKettle = (timerStop) => {
        let timerId = setInterval(() => {
            if (this.bolingTime === this.curentBolingTime) {
                this.on === false;
                clearInterval(timerId)
            } else {
                this.curentBolingTime +=1;
                if (timerStop) {
                    clearTimeout(timerId)
            }
        }
        }, 1000);
    }


    this.onToggle = () => {
        if (this.bolingTime !== this.curentBolingTime) {
            this.on = !this.on
            if (this.on) {
                timerKettle ()
                this.timerStop = false
            } else {
                this.timerStop = true
            }
        }
    }

    this.getStatus = () => {
        if (this.on) {
            return 'Чайник включен'
        } else {
            return 'Чайник выключен'
        }
    }
}

