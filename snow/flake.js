
// FLAKE Conponent
class Flake {
    // appear
    constructor(n, left, top, speed, size) {
        this.n = n        
        this.left = left
        this.top = top
        this.speed = speed
        this.size = size
        console.info(`FLAKE ${this.n}: APPEARED`)
    }


    // falling phase
    fall(cw, ch, cb ) {
        this.timerId = setInterval(() => {
            this.top += this.speed
            console.log(`FLAKE ${this.n}: FALL`, this)   
            this.update()
            if (this.top >= ch) {
                this.disappear(cb)
            }
        }, 20)  
    }

    // disappear
    disappear(cb) {
        clearInterval(this.timerId)
        console.log(`FLAKE ${this.n}: DISAPPEARED`, this)
        window[`flake__${this.n}`].style.display = `none`
        cb()
    }

    update() {
        window[`flake__${this.n}`].style.top = `${this.top}px`
    }

    // Preparation
    render(root) {
        root.innerHTML += `<div id="flake__${this.n}" class="flake" style="transform: scale(${this.size});left: ${this.left}px; top: ${this.top}px;">${this.n}</div>`
    }
}