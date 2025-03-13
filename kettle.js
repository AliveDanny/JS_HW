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

    this.create = (tagName) => {
        return document.createElement(tagName)
    }

    this.addClass = (element, className) => {
        element.classList.add(className);
    }

    this.removeClass = (element, className) => {
        element.classList.remove(className);
    }

    this.toggleClass = (element, className) => {
        element.classList.toggle(className);
    }

    this.hasClass = (element, className) => {
        return element.classList.contains(className);
    }

    this.attr = (element, attributeName, value) => {
        if (value !== undefined) {
            element.setAttribute(attributeName, value);
        } else {
            return element.getAttribute(attributeName);
        }
    }

    this.html = (element, content) => {
        if (content !== undefined) {
            element.innerHTML = content;
        } else {
            return element.innerHTML;
        }
    }

    this.search = (selector, element) => {
        element = element || document;
        return element.querySelectorAll(selector);
    }
}

