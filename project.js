// 1. deposit money
// 2. determine number of betting lines
// 3. collect bet amount
// 4. spin machine
// 5.check if user won 
// 6. give user their money
// 7. play again



const prompt = require('prompt-sync')();

// spinning slot
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "A":2,
  "B":4,
  "C":6,
  "D":8
}

const SYMBOL_VALUES = {
  "A":5,
  "B":4,
  "C":3,
  "D":2
}









const deposit = () => {
  // used a while loop to make the deposit amount option continous 
  while (true){
  const depositAmount = prompt('Enter deposit amount: ')
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log('Invalid deposit amount. Please try again.')
    // the else statement breaks the while loop
  }else{ 
    return numberDepositAmount;
  }
}
}

// number of lines
const getNumberOfLines = () => {
    while (true){
  const lines = prompt('Please choose betwen 1-3 lines to bet on: ')
  const numberOfLines = parseFloat(lines);

  if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
    console.log('Invalid number of lines. Please select 1-3 lines only.')
    // the else statement breaks the while loop
  }else{ 
    return numberOfLines;
  }
}

}

// collect an amoount

const getBet = (balance, lines) => {
    while (true){
  const bet = prompt('Please enter the total bet amount, per line: ')
  const numberBet = parseFloat(bet);

  if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
    console.log('Invalid bet. Please try again.')
    // the else statement breaks the while loop
  }else{ 
    return numberBet;
  }
}

}

const spin = () =>{
  const symbols = [];
  for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i =0; i < count; i++){
      symbols.push(symbol);
    }

  }

const reels =[[], [], []];
for (let i =0; i < COLS; i++){
  const reelSymbols = [...symbols];
  for (let j = 0; j < ROWS; j++){
    // generating a random index using .random, to generate a random number between 0 and 1 
    // and being multiplied by whatever the length of our symbol is
    // math.floor -> used to round randomIndex number down, to the nearest or lowest whole number
    const randomIndex = Math.floor(Math.random() * reelSymbols.length)
    const selectedSymbol =reelSymbols[randomIndex];
    reels[i].push(selectedSymbol);
    reelSymbols.splice(randomIndex, 1);

  }
}
return reels;
};
const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);