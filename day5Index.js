var moment = require('moment');
moment.locale('lv');
// console.log(moment().format('dddd'));
// console.log(moment().format('LLLL'));
// console.log(moment().format('LT'))
// console.log(moment());


// uzdevums - uztaisit funkciju, kas skaita cik dienas, stundas, minutes ir palikusas lidz Alarm laikam

class Alarm {
    constructor(end){
       this.end=end;
       this.start = moment().fromNow();
             
    }
    
     timeUntilAlarm(){
       end.diff(start, 'days')
        return  end.fromNow();
     }
}
let alarm1= new Alarm([2019,5,22]);
console.log(alarm1.timeUntilAlarm());
