class Bus {
    constructor(busRouteNo, schedule){
        this.number = busRouteNo;
        this.schedule = schedule;
    }
     getBusRoutNo (){
        return this.number 
    }
    setBusRouteNo (number){
       this.number=number;
    }
  }

class BusStop {
    constructor(stopName, minutesToGetfromDepo ){
        this.stopName = stopName;
        this.minutesToGetfromDepo= minutesToGetfromDepo;
        this.buses =[];
    }
   addBus (bus) {
    this.buses.push(bus)
   }

   displayBusNumbers (){
    let arrayOfBuses =[];
    for ( let i=0; i< this.buses.length; i++)
    {
       let result =  arrayOfBuses.push(this.buses[i].getBusRoutNo()).toString;
    }   console.log(result);
   }
}


let stopZemgalaGatve = new BusStop ('Zemgala Gatve', 5);

let bus12= new Bus( 12, ['9:30', '10:45' ,'11:50', '16:30']);

let bus1=new Bus(1, ['6:07','7:44', '8:46']);
// console.log(bus12.schedule);

stopZemgalaGatve.displayBusNumbers();
