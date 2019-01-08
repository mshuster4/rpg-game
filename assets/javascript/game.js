
$(document).ready(function() {

    var characters = {

        "Kenny": {
            name: "Kenny",
            health: 120,
            attack: 8,
            counterAttack: 5,
            image: "assets/images/kenny.jpg",
            },

        "Jimmy": {
            name: "Jimmy",
            health: 180,
            attack: 3,
            counterAttack: 9,
            image: "assets/images/jimmy.jpg",
            },

        "Woodland Critter": {
            name: "Woodland Critter",
            health: 150,
            attack: 6,
            counterAttack: 10,
            image: "assets/images/woodland-critter.jpg",
            },

        "Towelie": {
            name: "Towelie",
            health: 100,
            attack: 7,
            counterAttack: 4,
            image: "assets/images/towelie.jpg",
            },

    };

    var attackChoice;
    var enemies = [];
    var defenderChoice; 

  function loadCharacters(characters, loadingDiv) {

        var charDiv = $("<div class='col-sm-3 character' data-name='" + characters.name + "'>"); 
        var charName = $("<p class='text-center chracter-name'>").text(characters.name);
        var charImage = $("<img alt='image' class='img-fluid character-image'>").attr("src", characters.image);
        var charHealth = $("<p class='text-center character-health'>").text(characters.health); 
        charDiv.append(charName).append(charImage).append(charHealth); 
        $(loadingDiv).append(charDiv); 

    };

    function loadGame() {

        for (var key in characters) {

            loadCharacters(characters[key], "#character-choices");
        }
    };

    loadGame();

    $("#character-choices").on("click", ".character", function() {

    
        var attackChoice = $(this).attr("data-name"); 
        
        for (var key in characters) {

            if (attackChoice != characters[key].name) {

                    enemies.push(characters[key]);
                    console.log(enemies);

                }

            else {

                attackChoice = characters[key];
                console.log("attack choice: ", attackChoice); 
            }

        }
        
        updateDom(attackChoice, enemies); 


    });


    function updateDom(attackChoice, enemies) {

        $("#character-choices").empty();

        var playerDiv = $("<div class='col-sm-3 character' data-name='" + attackChoice.name + "'>"); 
        var playerName = $("<p class='text-center character-name'>").text(attackChoice.name);
        var playerImage = $("<img alt='image' class='img-fluid character-image'>").attr("src", attackChoice.image);
        var playerHealth = $("<p class='text-center character-health'>").text(attackChoice.health); 
        playerDiv.append(playerName).append(playerImage).append(playerHealth);
        $("#your-character").append(playerDiv); 

       
        for (var i = 0; i < enemies.length; i++) {

        var enemyDiv = $("<div class='col-sm-3 character' data-name='" + enemies[i].name + "'>"); 
        var enemyName = $("<p class='text-center chracter-name'>").text(enemies[i].name);
        var enemyImage = $("<img alt='image' class='img-fluid character-image'>").attr("src", enemies[i].image);
        var enemyHealth = $("<p class='text-center character-health'>").text(enemies[i].health); 
        enemyDiv.append(enemyName).append(enemyImage).append(enemyHealth); 
        $("#enemies").append(enemyDiv); 

        }


    }


});






