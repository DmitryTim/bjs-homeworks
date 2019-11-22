/******1*и*2*********Задание***********************/

"use strict"

class Weapon{
   construction(name, attack, durabuluty, range) {
     this.name = name
     this.attack = attack
     this.durabuluty = durabuluty
     this.range = range
   }



  takeDamage(damage){
    this.durability = this.durability - damage;
    if (this.durability < 0) {
       this.durability = 0
    }
  }

  getDamage() {
   if (this.durability === 0){
    return 0;
   }
    else if (this.durability >= this.durabuluty*0.3){ 
      return this.attack;
   }
    else {
     return attack/2;
    }
  }

  isBroken() {
    if (this.durability > 0){
      return false;
    }
    else {
      return true;
    }
  }

}

class Arm extends Weapon {
  constructor() {
  super();
  this.name = 'Рука';
  this.attack = 1;
  this.durability = Infinity;
  this.range = 1;
  }
}

class Bow extends Weapon{
  constructor() {
  super();
  this.name = 'Лук';
  this.attack = 10;
  this.durability = 200;
  this.range = 3;
  }
}

class Sword extends Weapon {
  constructor() {
  super();
  this.name = 'Меч';
  this.attack = 25;
  this.durability = 500;
  this.range = 1;
  }
}

class Knife extends Weapon {
  constructor() {
  super();
  this.name = 'Нож';
  this.attack = 5;
  this.durability = 300;
  this.range = 1;
  }
}

class Wand extends Weapon {
  constructor(){
  super();
  this.name = 'Посох';
  this.attack = 8;
  this.durability = 300;
  this.range = 2;
  }
}

class LongBow extends Weapon {
  constructor(){
  super();
  this.name = 'Лук';
  this.attack = 15;
  this.durability = 200;
  this.range = 4;
  }
}

class Axe extends Weapon {
  constructor(){
  super();
  this.name = 'Секира';
  this.attack = 27;
  this.durability = 800;
  this.range = 1;
  }
}

class ThunderWand extends Weapon {
  constructor(){
  super();
  this.name = 'Посох Бури';
  this.attack = 10;
  this.durability = 300;
  this.range = 3;
  }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const wand = new Wand();
const longBow = new LongBow();
const axe = new Axe();
const thunderWand = new ThunderWand();

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(bow.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false




