var arduino = require('duino')

var board = new arduino.Board({
    debug: true,
    // if mac, use below 
    // device: 'usb'

    // linux serial dev : /dev/ttyACM0
    device: 'ttyACM0'
});

var led = new arduino.Led({
    board: board,
    pin: 13
});

var button = new arduino.Button({
    board: board,
    pin: 2
});

button.on('up', function(){
    led.off();
});

button.on('down', function(){
    led.on();
});