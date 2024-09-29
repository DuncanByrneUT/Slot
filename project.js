// 1. deposit money
// 2. determine number of betting lines
// 3. collect bet amount
// 4. spin machine
// 5.check if user won 
// 6. give user their money
// 7. play again

// function deposit(){
//   return 1
// }

const prompt = require('prompt-sync')();

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

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);