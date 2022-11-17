
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";



//Move Dodger to the left

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }else if (event.key === "ArrowRight") {
        moveDodgerRight()
     }
  });

 
//Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left <=360) {
      console.log('The lef is : '  + left)
      dodger.style.left = `${left + 1}px`;
    }
  }
  



  