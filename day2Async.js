function somethingThatTakesTime() {
    console.log("2)");
    return new Promise(function(resolve) {
      console.log("3)");
      setTimeout(function() {
        console.log("5)");
        resolve("too long?");
      }, 1000);
      console.log("4)");
    });
  }
  
  async function myFunction() {
    console.log("1)");
    let value = await somethingThatTakesTime();
    console.log("6)");
    console.log(value);
  }
  
  console.log("0)");
  myFunction();
  console.log("7)");
  
  // 2nd example
  
  function resolveAfter2Seconds() {
    // 4. body of resolveAfter2Seconds
    return new Promise(resolve => {
      // 5. creating promise
      setTimeout(() => {
        // 7. Timeout Expired, calling resolve() with argument "resolved"
        resolve("resolved");
      }, 2000);
      // 6. Waiting for timout to expire (2 seconds)
    });
  }
  
  async function asyncCall() {
    // 2. enter here after start
    console.log("calling");
    // 3. printed log, calling resolveAfter2Seconds
    var result = await resolveAfter2Seconds();
    // 8. with async/await
    //    after resolve was called in resolvedAfter2Seconds
    // 4b. without async/await
    //    print out result (which was asigned only to promise
    //    and it didn't resolve yet, because we didnt wait for it)
    console.log(result);
    // expected output: 'resolved'
  }
  
  //1. start
  asyncCall();