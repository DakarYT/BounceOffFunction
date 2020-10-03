function bounceOff(objt1,objt2){

    if (objt1.x - objt2.x < objt2.width/2 + objt1.width/2
      && objt2.x - objt1.x < objt2.width/2 + objt1.width/2) {
        objt1.velocityX = objt1.velocityX * (-1);
        objt2.velocityX = objt2.velocityX * (-1);
  }
  if (objt1.y - objt2.y < objt2.height/2 + objt1.height/2
    && objt2.y - objt1.y < objt2.height/2 + objt1.height/2){
      objt1.velocityY = objt1.velocityY * (-1);
      objt2.velocityY = objt2.velocityY * (-1);
  
    }
  
  
  
  }
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }