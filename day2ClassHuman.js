class Human {

    constructor(age, gender=null, height, weight){
        this.age=age;
        this.gender = gender
        this.name= 'noname'
        this.height =height
        this.weight = weight
    }

    getName(){
        return this.name
    };
    setName(name) {
        this.name=name
    };

}
class Female extends Human {
    constructor(){
        super(); //calls all the parematers of constructor, and lets override a certain parameter 
        this.gender="female"
    }
    playWithCars() {
        console.log(this.name + " is playing with cars")
    }

    setName(name){
        this.name =name;
    }
}


let baby =new Human ();
console.log(baby);
baby.setName("Walter");
console.log(baby.name);


let girl = new Female();
console.log (girl);
girl.setName("Wendy");
girl.playWithCars();
console.log (girl.name);

