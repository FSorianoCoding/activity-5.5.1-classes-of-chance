class Casino {
    // constructor to build class
      constructor(name, fakeCoin){
        this.name = name;
        this.timesPlayed = 0;
        this.winnings = 0;
        this.fakeCoin = fakeCoin;
      }
    
    playGame(betAmount){
      // increase times played by 1 every time we play
      this.timesPlayed += 1
      // we are determining if Player Wins (else) or Loses (if)
      // casino wins if number is less than .5 OR fake coin is true
      if(Math.random() <= .5 || this.fakeCoin){
        console.log(this.name + " wins!")
        this.timesPlayed = 0;
      } 
      // otherwise player wins 
      else {
        console.log("You win " + betAmount)
        this.winnings = betAmount * (this.timesPlayed + 1)
        this.timesPlayed += 1;
      }
    }
  
  
    
  };
  
  // TESTS
  // creating the new casino object
  const myCasino = new Casino("HackerU Casino", true);
  console.log(myCasino);
  // playing the game -- passing in the bet amount to playGame
  myCasino.playGame(5);
  myCasino.playGame(15);
  myCasino.playGame(25);
  myCasino.playGame(35);
  
// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
