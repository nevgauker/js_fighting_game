window.addEventListener("keydown", (event) => {

    if (!player.dead){
      switch (event.key) {
        //player 1
        case "d":
          keys.d.pressed = true;
          player.lastKey = "d";
          break;
        case "a":
          keys.a.pressed = true;
          player.lastKey = "a";
          break;
        case "w":
          if (player.velocity.y == 0){
            player.velocity.y = jumpHeight;
          }
          break;
        case " ":
          player.attack("1");
          break;
        case "v":
          player.attack("2");
          break;
  
      }
    }
    if (!enemy.dead){
      switch (event.key) {
        // player 2
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          enemy.lastKey = "ArrowRight";
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastKey = "ArrowLeft";
          break;
        case "ArrowUp":
          if (enemy.velocity.y == 0){
            enemy.velocity.y = jumpHeight;
          }
          break;
        case "ArrowDown":
          enemy.attack("1");
          break;
        case "/":
          enemy.attack("2");
          break;  
      }
    }
  });
  
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      //player 1
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      //player 2
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
    }
  });
  