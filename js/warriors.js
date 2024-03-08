const samuraiMack = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  attackBox: { offset:{x:100,y:50},height: 50,width:160},
  imageSrc:"./img/left/samuraiMack/Idle.png",
  framesMax:8,
  scale:2.5,
  offset : { x: 215, y: 157 },
  sprites: {
      idle: {
        imageSrc:"./img/left/samuraiMack/Idle.png",
        framesMax:8
      },
      run: {
        imageSrc:"./img/left/samuraiMack/Run.png",
        framesMax:8
      },
      jump: {
        imageSrc:"./img/left/samuraiMack/Jump.png",
        framesMax:2
      },
      fall: {
        imageSrc:"./img/left/samuraiMack/Fall.png",
        framesMax:2
      },
      attack1 : {
        imageSrc:"./img/left/samuraiMack/Attack1.png",
        framesMax:6
      },
      attack2 : {
        imageSrc:"./img/left/samuraiMack/Attack2.png",
        framesMax:6
      },
      takeHit : {
        imageSrc:"./img/left/samuraiMack/Take_hit_white_silhouette.png",
        framesMax:4
      },
      death: {
        imageSrc:"./img/left/samuraiMack/Death.png",
        framesMax:6
      }
  },
  attackDamageFrame:4,//the specific frame in the attack the damage is done
});

const kenji = new Fighter({
    position: {
      x: 400,
      y: 100,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    attackBox: { offset:{x:-170,y:50},height: 50,width:170},
    imageSrc:"./img/right/kenji/Idle.png",
    framesMax:4,
    attackDamageFrame:2,//the specific frame in the attack the damage is done
    scale:2.5,
    offset : { x: 215, y: 167 },
    sprites: {
        idle: {
          imageSrc:"./img/right/kenji/Idle.png",
          framesMax:4
        },
        run: {
          imageSrc:"./img/right/kenji/Run.png",
          framesMax:8
        },
        jump: {
          imageSrc:"./img/right/kenji/Jump.png",
          framesMax:2
        },
        fall: {
          imageSrc:"./img/right/kenji/Fall.png",
          framesMax:2
        },
        attack1 : {
          imageSrc:"./img/right/kenji/Attack1.png",
          framesMax:4
        },
        attack2 : {
          imageSrc:"./img/right/kenji/Attack2.png",
          framesMax:4
        },
        takeHit : {
          imageSrc:"./img/right/kenji/Take_hit.png",
          framesMax:3
        },
        death: {
          imageSrc:"./img/right/kenji/Death.png",
          framesMax:7
        }
    }
    
  });
  
  const shadowstrike = new Fighter({
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    attackBox: { offset:{x:100,y:50},height: 50,width:160},
    imageSrc:"./img/left/shadowstrike/Idle.png",
    framesMax:4,
    scale:4,
    offset : { x: 88, y: 106 },
    sprites: {
        idle: {
          imageSrc:"./img/left/shadowstrike/Idle.png",
          framesMax:4
        },
        run: {
          imageSrc:"./img/left/shadowstrike/Run.png",
          framesMax:8
        },
        jump: {
          imageSrc:"./img/left/shadowstrike/Jump.png",
          framesMax:2
        },
        fall: {
          imageSrc:"./img/left/shadowstrike/Fall.png",
          framesMax:2
        },
        attack1 : {
          imageSrc:"./img/left/shadowstrike/Attack1.png",
          framesMax:4
        },
        attack2 : {
          imageSrc:"./img/left/shadowstrike/Attack2.png",
          framesMax:4
        },
        takeHit : {
          imageSrc:"./img/left/shadowstrike/Hit.png",
          framesMax:4
        },
        death: {
          imageSrc:"./img/left/shadowstrike/Death.png",
          framesMax:4
        }
    },

    attackDamageFrame:2,//the specific frame in the attack the damage is done

  
   });


   const divineRevenant = new Fighter({
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    attackBox: { offset:{x:100,y:50},height: 50,width:160},
    imageSrc:"./img/left/divineRevenant/Idle.png",
    framesMax:4,
    scale:3,
    offset : { x: 88, y: 130 },
    sprites: {
        idle: {
          imageSrc:"./img/left/divineRevenant/Idle.png",
          framesMax:4
        },
        run: {
          imageSrc:"./img/left/divineRevenant/Run.png",
          framesMax:8
        },
        jump: {
          imageSrc:"./img/left/divineRevenant/Jump.png",
          framesMax:2
        },
        fall: {
          imageSrc:"./img/left/divineRevenant/Fall.png",
          framesMax:2
        },
        attack1 : {
          imageSrc:"./img/left/divineRevenant/Attack1.png",
          framesMax:4
        },
        attack2 : {
          imageSrc:"./img/left/divineRevenant/Attack2.png",
          framesMax:4
        },
        takeHit : {
          imageSrc:"./img/left/divineRevenant/Hit.png",
          framesMax:4
        },
        death: {
          imageSrc:"./img/left/divineRevenant/Death.png",
          framesMax:4
        }
    },

    attackDamageFrame:2,//the specific frame in the attack the damage is done

  
   });


   const infernoReaver = new Fighter({
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    attackBox: { offset:{x:100,y:50},height: 50,width:160},
    imageSrc:"./img/left/infernoReaver/Idle.png",
    framesMax:4,
    scale:3.5,
    offset : { x: 88, y: 250 },
    sprites: {
        idle: {
          imageSrc:"./img/left/infernoReaver/Idle.png",
          framesMax:4
        },
        run: {
          imageSrc:"./img/left/infernoReaver/Run.png",
          framesMax:8
        },
        jump: {
          imageSrc:"./img/left/infernoReaver/Jump.png",
          framesMax:2
        },
        fall: {
          imageSrc:"./img/left/infernoReaver/Fall.png",
          framesMax:2
        },
        attack1 : {
          imageSrc:"./img/left/infernoReaver/Attack1.png",
          framesMax:4
        },
        attack2 : {
          imageSrc:"./img/left/infernoReaver/Attack2.png",
          framesMax:4
        },
        takeHit : {
          imageSrc:"./img/left/infernoReaver/Hit.png",
          framesMax:4
        },
        death: {
          imageSrc:"./img/left/infernoReaver/Death.png",
          framesMax:4
        }
    },

    attackDamageFrame:2,//the specific frame in the attack the damage is done

  
   });


   