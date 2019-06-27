var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'sawblade', x: 400, y: groundY },
                { type: 'sawblade', x: 700, y: groundY },
                // { type: 'sawblade', x: 900, y: groundY },
                // { type: 'sawblade', x: 1150, y: groundY - 110 },
                { type: 'sawblade', x: 1550, y: groundY },
                { type: 'sawblade', x: 1700, y: groundY },
                { type: 'swords', x: 2000, y: groundY - 110 },
                { type: 'swords', x: 2400, y: groundY - 110 },
                { type: 'swords', x: 2600, y: groundY },
                { type: 'swords', x: 2800, y: groundY - 110 },
                { type: 'swords', x: 3040, y: groundY },
                { type: 'sawblade', x: 3340, y: groundY },
                { type: 'sawblade', x: 3640, y: groundY },
                { type: 'sawblade', x: 3900, y: groundY },
                { type: 'sawblade', x: 4200, y: groundY - 110 },
                { type: 'sawblade', x: 4500, y: groundY },
                { type: 'sawblade', x: 4700, y: groundY },
                { type: 'swords', x: 5000, y: groundY - 110 },
                { type: 'swords', x: 5300, y: groundY - 110 },
                { type: 'swords', x: 5600, y: groundY },
                { type: 'swords', x: 5900, y: groundY - 110 },
                { type: 'swords', x: 6240, y: groundY },
                { type: 'star', x: 6640, y: groundY - 170 },
                 { type: 'star', x: 1340, y: groundY - 170 },
                
            ]
        };

        var enemy = game.createGameItem('enemy', 25);
        // Perform background anim
        function makeEnemy(x, y) {
          var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.bitmap('img/monster.png');
            redSquare.x = -50;
            redSquare.y = -50;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.rotationalVelocity = 10;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-40);
                enemy.fadeOut();
            };
                enemy.onProjectileCollision = function() {
                    enemy.fadeOut();
                };
        }


        makeEnemy(1000, groundY - 50);
        makeEnemy(1500, groundY - 50);
        makeEnemy(2000, groundY - 50);








        for (var i = 0; i < levelData.gameItems.length; i++) {

            if (levelData.gameItems[i].type === "sawblade") {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            else if (levelData.gameItems[i].type === "swords") {
                createSword(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            else{createStar(levelData.gameItems[i].x, levelData.gameItems[i].y)}
        }


        window.levelData = levelData;


        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

        function createSword(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sward (1).png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        function createStar(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = -20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/star.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            myObstacle.onPlayerCollision = function() {
                    myObstacle.fadeOut();
                    game.increaseScore(5000);
                   
                };
        }


    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
