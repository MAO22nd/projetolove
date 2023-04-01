var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b8a1a1cf-5142-4bd4-9aad-0482e06c943f","cf42957c-8c25-4bb5-aa01-3f5a0e88da38","fb4a721e-2de5-4609-839e-aa9ec668f74d","59179bcf-ed3f-4a23-beb3-7a83e3b54294","a81b6b50-d4ed-4867-b940-b6ec5f0eb7eb","e80390b5-a0b3-4170-b0d5-767bbf33ed42","53958dad-142b-4aba-8b99-04aae9f111bd"],"propsByKey":{"b8a1a1cf-5142-4bd4-9aad-0482e06c943f":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"cf42957c-8c25-4bb5-aa01-3f5a0e88da38":{"name":"alienBlue_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"dc4vui4_pmHrM.rep9aLGndzWtuC_cqp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png"},"fb4a721e-2de5-4609-839e-aa9ec668f74d":{"name":"alienBlue_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK/category_fantasy/alienBlue_jump.png","frameSize":{"x":66,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3cQxzZa4AZvq.fcLGjAA1KF1n1fuyfNK/category_fantasy/alienBlue_jump.png"},"59179bcf-ed3f-4a23-beb3-7a83e3b54294":{"name":"powerupBlue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8fzZrdBd565h4o5wjlCW1_2gX5RI7ZUL/category_video_games/powerupBlue.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"8fzZrdBd565h4o5wjlCW1_2gX5RI7ZUL","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8fzZrdBd565h4o5wjlCW1_2gX5RI7ZUL/category_video_games/powerupBlue.png"},"a81b6b50-d4ed-4867-b940-b6ec5f0eb7eb":{"name":"powerupGreen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/guMKL4NW5b2v3Cb_F4s84HNuKxURs3S2/category_video_games/powerupGreen.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"guMKL4NW5b2v3Cb_F4s84HNuKxURs3S2","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/guMKL4NW5b2v3Cb_F4s84HNuKxURs3S2/category_video_games/powerupGreen.png"},"e80390b5-a0b3-4170-b0d5-767bbf33ed42":{"name":"powerupRed_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"53958dad-142b-4aba-8b99-04aae9f111bd":{"name":"powerupYellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uAxvFw3MJ9tNtaLaWzAOrRFOqI8J8Ttt/category_video_games/powerupYellow.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"uAxvFw3MJ9tNtaLaWzAOrRFOqI8J8Ttt","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uAxvFw3MJ9tNtaLaWzAOrRFOqI8J8Ttt/category_video_games/powerupYellow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//CREATE BLUE POWER UP (TOP LEFT)
var blue_power = createSprite(100,100);
blue_power.setAnimation("powerupBlue_1");

//CREATE RED POWER UP (TOP RIGHT)



//CREATE GREEN POWER UP (BOTTOM LEFT)
var green_power = createSprite(290,90);
green_power.setAnimation("powerupGreen_1");

//CREATE YELLOW POWER UP (BOTTOM RIGHT)



//CREATE COIN SPRITE
var coin = createSprite(200,200);
coin.setAnimation("coin_gold_1");
coin.scale = 0.5;

//assign velocityX and velocityY to move the 'coin sprite'.
coin.velocityX = 6;
coin.velocityY = 8;

createEdgeSprites();

function draw() {
  background("white");
  
}
  //play sound if coin hits the 'blue power up'
  if(coin.bounceOff(blue_power)) {
    
    playSound("assets/category_achievements/retro_game_classic_power_up_2.mp3");
    //increase the scale of blue power up by 0.1
    blue_power.scale = blue_power.scale + 0.1;
  }
  
  //play sound if coin bounces off the 'green power up'
  if(coin.bounceOff(green_power )) {
  playSound("assets/category_points/vibrant_game_collecting_power_up_1.mp3");
  green_power.rotation +=10;
  
  //play sound if coin bounces off the 'red power up'
  
  

  
  //play sound if coin bounces off the 'yellow power up'
  
  


  //Change this instruction to play sound when coin bounces from the edges.
  coin.bounceOff(edges);
  
  //draw all the sprites
  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
