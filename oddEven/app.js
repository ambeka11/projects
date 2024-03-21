function getNumber(e) {
  console.log("clicked");
  const numberInput = document.getElementById("number");
  const number = parseInt(numberInput.value());
  const result = document.getElementById("result")
  if(number%2===0){
    result.innerText("Number is even");
  } else {
    result.innerHTML("Number is odd");
  }
}

const submitBtn = document.getElementById("submit-btn");
submitBtn.onclick(()=>{
  console.log("clicked");
})

