class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calPerimeter() {
        return (this.width + this.height) * 2;
    }

    calArea() {
        return this.width * this.height;
    }

    drawRect() {
        /** @type {HTMLCanvasElement} */
        let canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext("2d");
        ctx.strokeRect(10, 10, this.width, this.height);
    }
}

let rect1 = new Rectangle(100, 200)
console.log("Perimeter: " + rect1.calPerimeter());
console.log("Area: " + rect1.calArea());
rect1.drawRect();
