const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
const background = new Sprite({position:{
  x:0,y:0},imageSrc:"./img/background.png"});


  const shop = new Sprite({position:{
    x:600,y:128},imageSrc:"./img/shop.png",scale:2.75,framesMax:6});

function loadHTMLFile(url) {
  window.location.href = url;
} 


function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  c.fillStyle = "rgba(255,255,255,0.15)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  }

animate();



window.addEventListener("keyup", (event) => {
  switch (event.key) {
    //player 1
    case " ":
      loadHTMLFile("game.html");
      break;
   
  }
});
