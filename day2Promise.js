let promise = new Promise(
    //unanymous function which shall be called when promise is created
    function(resolve, reject) {
      // body of Promise
      console.log("start of logic");
      //... logic
      let success = false;
      // then call either resolve or reject based on logic
      success ? resolve("success") : reject("failure");
      console.log("end of logic");
    }
  );
  
  // creating structure of what happens after promise body finishes execution
  promise
    //    resolve("success"), thus success -> input
    .then(function(input) {
      // success body step 1 out of 1
      console.log(input);
    })
    .catch(function(error) {
      // failure body
      console.error(error);
    });