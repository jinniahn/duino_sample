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

// setup light sensor
// get data every 1sec
// PIN : A0
var light_sensor = new arduino.Sensor({  //<
    board: board,
    pin: 'A0',
    throttle: 1000
});

light_sensor.on('read', function(err,data){ // <
    console.log('ambient sensor value = ' + data);
    if( data > 200 ) {
	led.off();
    } else {
	led.on();
    }
});