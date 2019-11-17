const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 450,

  backgroundColor: "C3D9E6", 
  
  physics: {
    default: 'arcade',
    arcade: {
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

var player;
var bikers;
var morning;
var rushHour;
var map;
var groundlayer, backgroundlayer, coffeelayer, horselayer;
// to keep track of:
var timeText;
var bikeHitTimer = 0;
var immunityTimer = 0;
var coffeeBoostTimer = 0;

function preload() {
  this.load.image('easy', 'assets/easy.png');
  this.load.image('hard', 'assets/hard.png');
  this.load.image('ouch', 'assets/ouch.png');
  this.load.audio('fightsong', 'assets/fightsong.mp3');
  this.load.image('tileset', 'assets/tileset.png');
  this.load.tilemapTiledJSON('map', 'assets/tilemap.json');
  this.load.image('player', 'assets/skateboi.png');
  this.load.image('coffee', 'assets/coffee.png');
  this.load.image('biker', 'assets/biker.png');
  this.load.image('biker2', 'assets/biker2.png');
  this.load.image('trojansHorse', 'assets/trojansHorse.png');
}

// Set up game state 
const gameState = {
  width: 6000,
  height: 450,
  hard: false,
  delay: 2000,
  bikerVelocity: 160,
  playerVelocity: 200,
  timeLeft: 30,
};

function setEasyMode() {
  console.log('easy');
  gameState.timeLeft = 45;
  gameState.delay = 2000;
  gameState.playerVelocity = 160;
  gameState.bikerVelocity = 200;
}
function setHardMode() {
    console.log('hard');
    gameState.timeLeft = 30;
    gameState.delay = 800;
    gameState.playerVelocity = 260;
    gameState.bikerVelocity = 260;
}

function create() {
  this.input.on('pointerup', () =>{
      if (game.sound.context.state === 'suspended') {
        game.sound.context.resume();
      }
    });   
  this.sound = this.sound.add('fightsong');
  this.sound.play();

  // setting up the MAP
  map = this.make.tilemap({key: 'map'});
  const tileset = map.addTilesetImage('tileset', 'tileset');
  backgroundlayer = map.createStaticLayer("BackgroundLayer", tileset, 0, 0);
  groundlayer = map.createStaticLayer("GroundLayer", tileset, 0, 0);
  groundlayer.setCollisionByExclusion([-1]);
  // coffee layer
  var coffee = map.addTilesetImage('coffee');
  coffeelayer = map.createDynamicLayer('CoffeeLayer', coffee, 0, 0);
  // pony!
  var trojansHorse = map.addTilesetImage('trojansHorse');
  horselayer = map.createStaticLayer('Trojan Horse', trojansHorse, 0, 0);

  gameState.cursors = this.input.keyboard.createCursorKeys();


  // setting up the LEVELS of DIFFICULTY
  morning = this.add.sprite(100, 400, 'easy');
  rushHour = this.add.sprite(350, 400, 'hard');
  morning.setInteractive();
  rushHour.setInteractive();

  morning.on('pointerup', function() {
    setEasyMode();
  });
  rushHour.on('pointerup', function() {
    setHardMode();
  });

  // set the boundaries of our game world
  this.physics.world.bounds.width = gameState.width;
  this.physics.world.bounds.height = gameState.height;

  // Make a player
  player = this.physics.add.sprite(200, 200, 'player');
  player.setCollideWorldBounds(true);
  this.physics.add.collider(groundlayer, player);

  // Bikers
  bikers = this.physics.add.group();

  bikerGenLoop = this.time.addEvent({
    delay: gameState.delay,
    callback: bikerGen,
    callbackScope: this,
    loop: true,
  });

  function bikerGen () {
    // console.log(gameState.delay);
    var xCoord = player.x + 220;
    var yCoord = Math.random() * 450;
    if (yCoord < 70)
      yCoord = 70;
    else if (yCoord > 380)
      yCoord = 380;
    var b1 = bikers.create(xCoord, yCoord, 'biker');
    b1.enableBody = true;
    b1.setVelocityX(-gameState.bikerVelocity);
    b1.body.bounce.x = 1;
    if (gameState.delay == 800) {
      console.log(gameState.delay);
      var yCoord = Math.random() * 450;
      if (yCoord < 70)
        yCoord = 70;
      else if (yCoord > 380)
        yCoord = 380;
      var b2 = bikers.create(xCoord - 440, yCoord, 'biker2');
      b2.enableBody = true;
      b2.setVelocityX(gameState.bikerVelocity);
      b2.body.bounce.x = 1;
    }
  }

  this.physics.add.overlap(player, bikers, () => {
     bikeHitTimer = 1;
     if (immunityTimer < 0)
      this.add.sprite(player.x, player.y - 50, 'ouch');
    immunityTimer = 1;
  });

  // this.physics.add.collider(bikers, player, function (biker) {

  // });

  // setting up timer
  timeText = this.add.text(350, 10, gameState.timeLeft, { fontSize: '20px', fill: '#ffffff'});
  const timerLoop = this.time.addEvent({
    delay: 1000,
    callback: printTime,
    callbackScope: this,
    loop: true,
  });

  function printTime () {
    gameState.timeLeft--;
    timeText.setText(gameState.timeLeft);
    if (gameState.timeLeft <= 0) {
      gameState.timeLeft = 1;
      this.add.text(150, 225, 'GAME OVER', { fontSize: '30px', fill: '#ffffff'});
      bikerGenLoop.destroy();
      this.physics.pause();
    }

    coffeeBoostTimer--;
    bikeHitTimer--;
    immunityTimer--;
  }

  timeText.setScrollFactor(0)

  // Camera
  // set bounds so the camera won't go outside the game world
  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  // make the camera follow the player
  this.cameras.main.startFollow(player);

  coffeelayer.setTileIndexCallback(21, collectCoffee, this);   
  this.physics.add.overlap(player, coffeelayer);
}

function collectCoffee(sprite, tile) {
    coffeelayer.removeTileAt(tile.x, tile.y);
    coffeeBoostTimer = 3;
    return false;
}


function update() {
  if (coffeeBoostTimer > 0) {
    speed = gameState.playerVelocity + 100;
  }
  else {
    speed = gameState.playerVelocity;
  }

  if (bikeHitTimer > 0) {
    speed = 0;
  }

  if (gameState.cursors.right.isDown) {
    player.setVelocityX(speed);
  }
  else if (gameState.cursors.left.isDown) {
    player.setVelocityX(-speed);
  } 
  else {
    player.setVelocityX(0);
  }
  if (gameState.cursors.up.isDown) {
    player.setVelocityY(-speed);
  }
  else if (gameState.cursors.down.isDown) {
    player.setVelocityY(speed);
  }
  else {
    player.setVelocityY(0);
  }

  if (player.x > 5950) {
      this.add.text(150, 225, 'YOU WIN', { fontSize: '30px', fill: '#ffffff'});
      this.physics.pause();
  }
}

