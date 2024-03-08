const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
const gameSpeed = 5;
const jumpHeight = -20;

const keys = {
  a: { pressed: false },
  d: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
};

const background = new Sprite({position:{
  x:0,y:0},imageSrc:"./img/background.png"});


  const shop = new Sprite({position:{
    x:600,y:128},imageSrc:"./img/shop.png",scale:2.75,framesMax:6});


    
const player = samuraiMack;
const enemy = kenji;

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  c.fillStyle = "rgba(255,255,255,0.15)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
  player.velocity.x = 0;
  enemy.velocity.x = 0;

  //player movement
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -gameSpeed;
    player.switchSprites('run');
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = gameSpeed;
    player.switchSprites('run');
  }else{
    player.switchSprites('idle');
  }
  //player jump
  if (player.velocity.y < 0){
    player.switchSprites('jump');
  }else if (player.velocity.y > 0 ){
    player.switchSprites('fall');
  }
   
  //player 2 / enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -gameSpeed;
    enemy.switchSprites('run');
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = gameSpeed;
    enemy.switchSprites('run');
  }else{
    enemy.switchSprites('idle');
  }

  //player2/enemy jump
  if (enemy.velocity.y < 0){
    enemy.switchSprites('jump');
  }else if (enemy.velocity.y > 0 ){
    enemy.switchSprites('fall');
  }
  //detect collisions & get hit

  if (
    rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    player.isAttacking && player.frameCurrent === player.attackDamageFrame
  ) {
    console.log("player is attacking successfully!");
    player.isAttacking = false;
    enemy.takeHit();

    gsap.to('#enemyHealth',{
      width :enemy.health + '%'
    })
    // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
  }

  //player misses 
  if (player.isAttacking && player.frameCurrent === player.attackDamageFrame){
    console.log("player stop attacking");
    player.isAttacking = false;
  }

  if (
    rectangularCollision({ rectangle1: enemy, rectangle2: player }) &&
    enemy.isAttacking && enemy.frameCurrent === enemy.attackDamageFrame
  ) {
    console.log("enemy is attacking successfully");
    enemy.isAttacking = false;
    player.takeHit();
    // document.querySelector('#playerHealth').style.width = player.health + '%';

    gsap.to('#playerHealth',{
      width :player.health + '%'
    })
  }

   //player misses 
   if (enemy.isAttacking && enemy.frameCurrent === enemy.attackDamageFrame){
    enemy.isAttacking = false;
  }

  //end game based on health
  if (player.health <= 0 || enemy.health <= 0) {
    detarminWinner({player,enemy,timerId})
  }

}

animate();

