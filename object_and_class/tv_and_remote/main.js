class Remote {
    constructor(tivi) {
        this.tivi = tivi;
    }
    setChannel(channel) {
        this.tivi.setChannel(channel);
    }

    increaseVolume(volume) {
        this.tivi.increaseVolume(volume);
    }

    decreaseVolume(volume) {
        this.tivi.decreaseVolume(volume);
    }

    turnOnTivi() {
        this.tivi.turnOn();
    }

    turnOffTivi() {
        this.tivi.turnOff();
    }
}


class Tivi {
    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    setChannel(channel) {
        this.channel = channel;
    }

    getChannel() {
        return this.channel;
    }


    turnOn() {
        this.status = "ON";
    }

    turnOff() {
        this.status = "OFF";
    }

    getStatus() {
        return this.status;
    }

    getVolume() {
        return this.volume;
    }

    increaseVolume(volume) {
        this.volume += volume;
    }

    decreaseVolume(volume) {
        this.volume -= volume;
        if (this.volume < 0) {
            this.volume = 0;
        }
    }
}

alert("Create new tivi!");
let tivi = new Tivi(1, 0, "OFF");
alert("Create new remote!");
let remote = new Remote(tivi);

alert("Turn tivi ON");
tivi.turnOn();
alert("Tivi status is " + tivi.getStatus());

alert("Switch to channel 7");
tivi.setChannel(7);
alert("Channel is now " + tivi.getChannel());

alert("Use remote to switch to channel 3");
remote.setChannel(3);
alert("Channel is now " + tivi.getChannel());

alert("Use remote to volume up");
remote.increaseVolume(2);
alert("Volume is now " + tivi.getVolume());

alert("Use remote to turn off tivi");
remote.turnOffTivi();
alert("Tivi status is " + tivi.getStatus());