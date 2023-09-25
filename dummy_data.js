const mqtt_connect = require('./mqtt_connect');
const moment = require('moment-timezone');


function randomIntFromInterval(min, max) { // min and max included 
    return (Math.random() * (max - min + 1) + min).toFixed(2)
}
  
function dummyData_ics() {
    var TIMES = moment(new Date()).locale('id').format();

    var humidity280 = randomIntFromInterval(0, 100);
    var pressure280 = randomIntFromInterval(300, 1100);
    var temp280 = randomIntFromInterval(-40, 85);
    var temp388 = randomIntFromInterval(-40, 85);
    var pressure388 = randomIntFromInterval(300, 1250);
    var phSensor = randomIntFromInterval(0,14);
    var tdsSensor = randomIntFromInterval(0,1000);
    var moistureSensor = randomIntFromInterval(0,570);
    var anemoMeter = randomIntFromInterval(0.4, 0.8);
    var windVane = randomIntFromInterval(0,180);
    var currentSensor = randomIntFromInterval(-5000, 5000);
    var rainIntensity = randomIntFromInterval(0,1024);
    var rainStatus = randomIntFromInterval(0,1);

    data = {
        "datetime" : TIMES,
        "humidity_280" : humidity280,
        "pressure_280" : pressure280,
        "temperature_280" : temp280,
        "temperature_388" : temp388,
        "pressure_388" : pressure388,
        "phSensor" : phSensor,
        "tdsSensor" : tdsSensor,
        "moistureSensor" : moistureSensor,
        "anemoMeter" : anemoMeter,
        "windVane" : windVane,
        "currentSensor" : currentSensor,
        "rainIntensity" : rainIntensity,
        "rainStatus" : rainStatus

    }
    console.log(data);
    mqtt_connect.publish('dummyICS', JSON.stringify(data), {qos:0, retain:false}); 
}

function dummyData_tambak() {
    var TIMES = moment(new Date()).locale('id').format();

    var humidity = randomIntFromInterval(0, 100);
    var pressure = randomIntFromInterval(300, 1100);
    var temp = randomIntFromInterval(-40, 85);
    var phSensor = randomIntFromInterval(0,14);
    var tdsSensor = randomIntFromInterval(0,1000);
    var nh3_sensor = randomIntFromInterval(0,50);
    var dissox_sensor = randomIntFromInterval(0,20);
    var wtemp_sensor = randomIntFromInterval(-10,85);


    data = {
        "datetime" : TIMES,
        "humidity" : humidity,
        "pressure" : pressure,
        "temperature" : temp,
        "phSensor" : phSensor,
        "tdsSensor" : tdsSensor,
        "nh3_sensor" : nh3_sensor,
        "dissox_sensor" : dissox_sensor,
        "wtemp_sensor" : wtemp_sensor

    }
    console.log(data);
    mqtt_connect.publish('dummyTambak', JSON.stringify(data), {qos:0, retain:false}); 
}

setInterval(dummyData_ics, 3000);
setInterval(dummyData_tambak, 3000);





