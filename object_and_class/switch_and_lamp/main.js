class SwichButton {
    constructor() {
        this.status = "OFF";
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.lamp.turnOn();
    }
    
    switchOff() {
        this.lamp.turnOff();
    }

}

class ElectricLamp {
    constructor() {
        this.status = "OFF";
    }

    turnOn() {
        this.status = "ON";
        alert("Lamb is " + this.status);
    }

    turnOff() {
        this.status = "OFF";
        alert("Lamb is " + this.status);
    }
}

let switchButton = new SwichButton();
let electricLamp = new ElectricLamp();

switchButton.connectToLamp(electricLamp);

for (let i = 0; i < 10; i++) {
    alert(i + 1);
    switchButton.switchOn();
    switchButton.switchOff();
}