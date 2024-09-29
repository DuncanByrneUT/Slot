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

const depositAmount = deposit();
