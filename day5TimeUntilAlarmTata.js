class Alarm{
    constructor(dateTime){
        this.dateTime=dateTime;
    }
    timeUntilAlarm(){
        var moment = require('moment');
        let date = new moment(this.dateTime).format("MMM Do YY");
        let time = new moment(this.dateTime).format("h:mm:ss a");
        console.log('From/to: ' + date + ' time: ' + time)
        let month = moment(date,"MMM Do YY").startOf('day').fromNow();
        let hrs = moment(time,"h:mm:ss a").startOf('hour').fromNow();
        
        console.log('is ' + month + ' and ' + hrs)
        
    }
}

function timeUntilAlarm(){
    var moment = require('moment');
    let dateTime= new moment('2019-05-22 14:05:00').format();
    let  alarm= new Alarm(dateTime);
    alarm.timeUntilAlarm();
}

timeUntilAlarm();