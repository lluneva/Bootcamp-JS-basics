class Bus {

    constructor(busNumber, schedule) {
      this.number = busNumber;
      this.schedule = schedule;
    }
  
    getNumber() {
      return this.number;
    }
  
    setNumber(number) {
      this.number = number;
    }
  
    getSchedule() {
      return this.schedule;
    }
  
    setSchedule(schedule) {
      this.schedule = schedule;
    }
  
    addToSchedule(time) {
      this.schedule.push(time);
      this.schedule.sort();
    }
  
  }
  
  class BusStop {
    constructor(nameOfBusStop, minutesFromDepo) {
      this.name = nameOfBusStop;
      this.minutesFromDepo = minutesFromDepo;
      this.buses = [];
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
      this.name = name;
    }
  
    getMinutesFromDepo() {
      return this.minutesFromDepo;
    }
  
    setMinutesFromDepo(time) {
      this.minutesFromDepo = time;
    }
  
    getBuses() {
      return this.buses;
    }
  
    displayBusNumber() {
      let output = [];
      for (let i = 0; i < this.buses.length; i++) {
        output.push(this.buses[i].getNumber());
      }
      return output;
    }
  
    displaySchedule() {
      let times = [];
      let output = [];
      for (let i = 0; i < this.buses.length; i++) {
        times = this.buses[i].getSchedule();
        for (let j = 0; j < times.length; j++) {
          let hours = Number(times[j].split(":").shift());
          let minutes = Number(times[j].split(":").pop());
          let newMinutes;
  
          if ( (minutes + this.minutesFromDepo) < 60 ) {
            newMinutes = minutes+this.minutesFromDepo;
          } else {
            hours++;
            newMinutes = (minutes+this.minutesFromDepo) % 60;
          }
  
          if (newMinutes < 10) {
            output.push(hours + ":0" + newMinutes);
          } else {
            output.push(hours + ":" + newMinutes);
          }
        }
      }
      return output;
    }
  
    addBus(busNumber) {
      this.buses.push(busNumber);
    }
  }
  
  let stop1 = new BusStop("Bikernieku iela", 7);
  let stop2 = new BusStop("G. Zemgala Gatve", 13);
  let bus1 = new Bus(1, ["08:10", "10:42", "11:25", "16:00", "19:10"]);
  let bus2 = new Bus(2, ["09:05", "21:55"]);
  bus1.addToSchedule("13:35");
  stop1.addBus(bus1);
  stop1. addBus(bus2);
  //console.log(stop1);
  console.log("Bus numbers for busStop : " + stop1.displayBusNumber());
  console.log("Buses at the busStop : " + stop1.displaySchedule());