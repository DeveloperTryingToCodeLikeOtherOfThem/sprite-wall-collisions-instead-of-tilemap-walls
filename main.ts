namespace spriteWalls {
    export enum SpriteWallCollisions {
        //% block="on"
        On,
        //% block="off"
        Off
    }

   //% block="set sprite wall collision %sprite=variables_get(playerSprite) %wallSpriteObstacle=variables_get(wallSpriteObstacle) %on=SpriteWallCollisions.On"
    export function setSpriteWallCollision(sprite: Sprite, wallSpriteObstacle: Sprite, on: SpriteWallCollisions | boolean) {
       if(on === true || on === SpriteWallCollisions.On)
        if(sprite.overlapsWith(wallSpriteObstacle)) {
            if (sprite.x <= wallSpriteObstacle.x 
            || sprite.x >= wallSpriteObstacle.x) 
            sprite._x = sprite._lastX
            if (sprite.y <= wallSpriteObstacle.y 
            || sprite.y >= wallSpriteObstacle.y) 
            sprite._y = sprite._lastY
        } 
    }
} 