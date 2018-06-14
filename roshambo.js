var Rochambeau = {
    player: new Player(),
    computer: new Player(),
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    lizardButton: document.getElementById("lizard"),
    spockButton: document.getElementById("spock"),
    playButton: document.getElementById("play"),
    matchscore: {
        wins: 0,
        losses: 0
    },
    choices: {
        rock: 0,
        paper: 1,
        scissors: 2,
        lizard: 3,
        spock: 4
    },
    choicesinverse: {
        0: "Rock",
        1: "Paper",
        2: "Scissors",
        3: "Lizard",
        4: "Spock"
    },
    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },
    localscore: {
        wins: 0,
        losses: 0,
        ties: 0
    },
    playGame: function () {
        if (Rochambeau.player.choice == Rochambeau.computer.choice) {

            ++Rochambeau.score.ties;
            Rochambeau.displayGameResult("tie")

        } else if (Rochambeau.player.choice == Rochambeau.choices.rock && (Rochambeau.computer.choice == Rochambeau.choices.scissors || Rochambeau.computer.choice == Rochambeau.choices.lizard)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")

        } else if (Rochambeau.player.choice == Rochambeau.choices.paper && (Rochambeau.computer.choice == Rochambeau.choices.rock || Rochambeau.computer.choice == Rochambeau.choices.spock)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")

        } else if (Rochambeau.player.choice == Rochambeau.choices.scissors && (Rochambeau.computer.choice == Rochambeau.choices.paper || Rochambeau.computer.choice == Rochambeau.choices.lizard)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")

        } else if (Rochambeau.player.choice == Rochambeau.choices.lizard && (Rochambeau.computer.choice == Rochambeau.choices.spock || Rochambeau.computer.choice == Rochambeau.choices.paper)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")

        } else if (Rochambeau.player.choice == Rochambeau.choices.spock && (Rochambeau.computer.choice == Rochambeau.choices.scissors || Rochambeau.computer.choice == Rochambeau.choices.rock)) {

            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")

        } else {

            ++Rochambeau.score.losses;
            Rochambeau.displayGameResult("lose")
        }
    },
    updateScoreBoard: function () {
        document.getElementById("wins").textContent = Rochambeau.score.wins;
        document.getElementById("losses").textContent = Rochambeau.score.losses;
        document.getElementById("ties").textContent = Rochambeau.score.ties;
        document.getElementById("matchwins").textContent = Rochambeau.matchscore.wins;
        document.getElementById("matchlosses").textContent = Rochambeau.matchscore.losses;
    },
    updateMatches: function () {
        if (Rochambeau.score[0] == 2) {
            ++Rochambeau.match[0],
                Rochambeau.score = [0, 0, 0],
                console.log("You won a match!")
        } else if (Rochambeau.score[2] == 2) {
            ++Rochambeau.match[1],
                Rochambeau.score = [0, 0, 0],
                console.log("Computer won a match!")
        }
    },

    displayGameResult: function (result) {

        if (Rochambeau.localscore.wins == 2) {
            var messagetwo = "You won the match " + Rochambeau.localscore.wins + " - " + Rochambeau.localscore.losses + ".";
        } else if (Rochambeau.localscore.losses == 2) {
            var messagetwo = "You lost the match " + Rochambeau.localscore.wins + " - " + Rochambeau.localscore.losses + ".";
        } else {
            var messagetwo = "Your current best of three score is " + Rochambeau.localscore.wins + " - " + Rochambeau.localscore.losses + ".";
        }
        var message = "Your choice was " + Rochambeau.choicesinverse[Rochambeau.player.choice] + " and the computer's choice was " + Rochambeau.choicesinverse[Rochambeau.computer.choice] + ".";
        if (result === "win") {
            document.getElementById("result").textContent = message + " YOU WIN! " + messagetwo;
            document.getElementById("result").className = "alert alert-success";
        } else if (result === "lose") {
            document.getElementById("result").textContent = message + " YOU LOSE! " + messagetwo;
            document.getElementById("result").className = "alert alert-danger";
        } else {
            document.getElementById("result").textContent = message + " A tie. " + messagetwo;
            document.getElementById("result").className = "alert alert-info";
        }
        Rochambeau.updateScoreBoard();
        Rochambeau.updateMatchScore();
    },
    storePlayerChoice: function (choice) {
        Rochambeau.player.choice = choice;
        console.log("My choice = " + Rochambeau.player.choice);
        Rochambeau.generateComputerChoice();
    },
    generateComputerChoice: function () {
        Rochambeau.computer.choice = Math.floor(Math.random() * 5);
        console.log("Computer choice = " + Rochambeau.computer.choice);
    }
}

Rochambeau.rockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(0)
});
Rochambeau.paperButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(1)
});
Rochambeau.scissorsButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(2)
});
Rochambeau.lizardButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(3)
});
Rochambeau.spockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(4)
});
Rochambeau.playButton.addEventListener('click', () => {
    Rochambeau.generateComputerChoice();
    Rochambeau.playGame()
});

function Player() {
    this.choice = null;
};
