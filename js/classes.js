class Sprite {
    constructor({ position,imageSrc,scale = 1,framesMax = 1,offset = {x: 0, y: 0} }) {
      this.position = position;
      this.height = 150;
      this.width = 50;
      this.image =  new Image();
      this.image.src = imageSrc;
      this.scale= scale;
      this.framesMax = framesMax;
      this.frameCurrent = 0;
      this.framesElapsed = 0;
      this.framesHolds = 7;
      this.offset = offset;
    }
    draw() {
        c.drawImage(
          this.image,
          this.frameCurrent * (this.image.width/ this.framesMax),
          0,
          this.image.width/this.framesMax,
          this.image.height, 
          this.position.x - this.offset.x,
          this.position.y - this.offset.y,
          (this.image.width/this.framesMax) * this.scale,
          this.image.height * this.scale)
    }

    annimatedFrames(){
      this.framesElapsed++;

      if (this.framesElapsed % this.framesHolds === 0) {
        if (this.frameCurrent < this.framesMax-1){
          this.frameCurrent++;
        }else{
          this.frameCurrent = 0;
        }
       }

    }
  
    update() {
      this.draw();
      this.annimatedFrames();
    }
  }




class Fighter extends Sprite {
    constructor({ position,
       velocity, color = "red",
       imageSrc,scale = 1,
       framesMax = 1,
       offset = {x:0,y:0},
       sprites,
       attackBox = { offset:{},width:undefined,height:undefined},
       attackDamageFrame,
       }) {
      super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
      })
      this.velocity = velocity;
      this.height = 150;
      this.width = 50;
      this.lastKey;
      this.attackBox = {
        position: { x: this.position.x, y: this.position.y },
        width: attackBox.width,
        height: attackBox.height,
        offset: attackBox.offset,
      };
      this.color = color;
      this.isAttacking;
      this.health = 100;
      this.frameCurrent = 0;
      this.framesElapsed = 0;
      this.framesHolds = 7;
      this.sprites = sprites;
      this.dead = false;
      this.isJumping = false;
      this.attackDamageFrame = attackDamageFrame;
      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image();
        sprites[sprite].image.src = sprites[sprite].imageSrc;
      }
    }
   
    update() {
      this.draw();
      if (!this.dead) {
        super.annimatedFrames();
      }
      //attack boxe
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y+ this.attackBox.offset.y;
  
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;


      // c.fillRect(this.attackBox.position.x, this.attackBox.position.y,this.attackBox.width,this.attackBox.height);

      //gravity function

      if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
        this.velocity.y = 0;
        this.position.y = 330;
      } else {
        this.velocity.y += gravity;
      }
    }
    attack(num) {
      this.switchSprites(`attack${num}`);
      this.isAttacking = true;
      // setTimeout(() => {
      //   this.isAttacking = false;
      // }, 100);
    }

    takeHit() {
      console.log(this.sprites);
      this.health -= 20;
      if (this.health<=0){
        this.switchSprites('death');
      }else{
        this.switchSprites('takeHit');
      }
    }

    switchSprites(sprite) {
      //overwrite all animations with death animation
      if (this.image === this.sprites.death.image) {
        if (this.frameCurrent === this.sprites.death.framesMax - 1)
          this.dead = true;
        return
      };
      //override all animations with attack animation
      if (this.image === this.sprites.attack1.image && this.frameCurrent < this.sprites.attack1.framesMax - 1) return;
      if (this.image === this.sprites.attack2.image && this.frameCurrent < this.sprites.attack2.framesMax - 1) return;


      //override all animations with get hit animation
      if (this.image === this.sprites.takeHit.image && this.frameCurrent < this.sprites.takeHit.framesMax - 1) return;

      switch(sprite){
        case 'idle':
          if (this.image !== this.sprites.idle.image){
            this.image = this.sprites.idle.image;
            this.framesMax = this.sprites.idle.framesMax;
            this.frameCurrent = 0
          }
          break
        case 'run':
          if (this.image !== this.sprites.run.image){
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax;
            this.frameCurrent = 0
          }
          break
        case 'jump':
          if (this.image !== this.sprites.jump.image){
            this.image = this.sprites.jump.image
            this.framesMax = this.sprites.jump.framesMax;
            this.frameCurrent = 0
          }
          break
          case 'fall':
            if (this.image !== this.sprites.fall.image){
              this.image = this.sprites.fall.image
              this.framesMax = this.sprites.fall.framesMax;
              this.frameCurrent = 0
            }
            break
          case 'attack1':
          if (this.image !== this.sprites.attack1.image){
            this.image = this.sprites.attack1.image
            this.framesMax = this.sprites.attack1.framesMax;
            this.frameCurrent = 0
          }
            break
          case 'attack2':
            if (this.image !== this.sprites.attack2.image){
              this.image = this.sprites.attack2.image
              this.framesMax = this.sprites.attack2.framesMax;
              this.frameCurrent = 0
            }
              break
            case 'takeHit':
              if (this.image !== this.sprites.takeHit.image){
                this.image = this.sprites.takeHit.image
                this.framesMax = this.sprites.takeHit.framesMax;
                this.frameCurrent = 0
              }
                break
              case 'death':
                if (this.image !== this.sprites.death.image){
                  this.image = this.sprites.death.image
                  this.framesMax = this.sprites.death.framesMax;
                  this.frameCurrent = 0
                }
                  break
      }
    }

   
  }
  