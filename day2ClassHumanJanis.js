class Human {
    constructor(age = 0, sex = null, height) {
      this.age = age;
      this.sex = sex;
      this.height = 180;
      this.weight = 70;
      this.name = "noname";
    }
  
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
  }
  
  class Female extends Human {
    constructor() {
      super();
      this.sex = "female";
    }
  
    playWithCars() {
      console.log(this.name + " is playing with cars");
    }
  
    setName(name) {
      console.log("You are setting a name for a Female");
      this.name = name;
    }
  }
  
  let baby = new Human();
  let baby2 = new Human(12, "male");
  // console.log(baby);
  // baby.setName("Walter");
  // console.log(baby.getName());
  // console.log(baby.name);
  
  // baby.playWithCars();
  
  let girl = new Female();
  console.log(girl);
  girl.setName("Elizabeth");
  girl.playWithCars();
  console.log(girl);
