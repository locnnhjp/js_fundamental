/** @type {HTMLAudioElement} */
let context = new AudioContext();
let gain = context.createGain();
gain.connect(context.destination);
let osci = context.createOscillator();
osci.type = "sawtooth";
osci.frequency.value = 100;
osci.connect(gain);
osci.start();