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
    }
    
     timeUntilAlarm(){
       end.diff(start, 'days')
        return  end.fromNow();
     }
}
console.log(this.start);
console.log(this.end)
let alarm1= new Alarm([2019]);
console.log(alarm1);
