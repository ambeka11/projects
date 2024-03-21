var arr = [
  {dp:"https://images.unsplash.com/photo-1593158500181-996ca96a02fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1568849676085-51415703900f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"},
  {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1504618331119-b3c6abe31201?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1463183547458-6a2c760d0912?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp:"https://images.unsplash.com/photo-1648198835736-cb9d97420a33?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var storiyan = document.querySelector(".storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function(dets){
 document.querySelector("#full-screen").style.display = "block"
 document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`
 
 setTimeout(function(){
  document.querySelector("#full-screen").style.display = "none"
 },3000)
});