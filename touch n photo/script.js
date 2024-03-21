var elem = document.querySelectorAll(".elem")

elem.forEach(function(val) {
  val.addEventListener("mouseenter", function(){
    val.childNodes[3].style.opacity = 1
  });
  val.addEventListener("mouseleave", function(){
    val.childNodes[3].style.opacity = 0
  });
  val.addEventListener("mousemove", function(dets){
    val.childNodes[3].style.left = dets.x+"px"
  });
});




// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//   elemImage.computedStyleMap.left = dets.x+"px";
//   elemImage.computedStyleMap.top = dets.y+"px";
// })

// elem1.addEventListener("mouseenter",function(dets){
//   elemImage.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//   elemImage.style.opacity = 0;
// })

