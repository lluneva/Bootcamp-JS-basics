//write a countdown timer 10=> 0, 
function printSeconds(seconds) {
    if (seconds <0){
        return null;
    }
 
    setTimeout(function print() {
      console.log(seconds);
      if (seconds > 0) {
        setTimeout(print, 1000);
      }
      seconds--;
    }, 0);
  }
  
  printSeconds(7);


function somethingThatTakesTime(counter) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(counter);
      }, 1000);
    });
  }
  
  async function myFunction(counter) {
    if (counter>0){
      let value = await somethingThatTakesTime(counter);
      console.log(value);
      myFunction(--counter);
    }
  }
  
  myFunction(3);


  