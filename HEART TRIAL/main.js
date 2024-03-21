const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove",(event) => {
  const xPos = event.offsetX; //pos=position
  const yPos = event.offsetY;
  const spanEl = document.createElement("span"); //new one
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const size = Math.random()*100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});