 // Counter variable
    let count = 0;

    // Select elements
    let countText = document.getElementById("count");

    let increaseBtn = document.getElementById("increase");

    let decreaseBtn = document.getElementById("decrease");

    let resetBtn = document.getElementById("reset");


    // Increase
    increaseBtn.addEventListener("click", function(){

      count++;

      countText.textContent = count;

    });


    // Decrease
    decreaseBtn.addEventListener("click", function(){

      // Negative stop
      if(count > 0){

        count--;

        countText.textContent = count;

      }

    });


    // Reset
    resetBtn.addEventListener("click", function(){

      count = 0;

      countText.textContent = count;

    });