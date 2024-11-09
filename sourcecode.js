const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const MAX_BET = 100;
const MIN_BET = 1;

const SYMBOLS = {
  A: { count: 2, value: 5 },
  B: { count: 4, value: 4 },
  C: { count: 6, value: 3 },
  D: { count: 8, value: 2 },
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount (or 'q' to quit): ");
    if (depositAmount.toLowerCase() === "q") {
      console.log("Thanks for playing!");
      process.exit();
    }
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount. Please enter a positive number.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > ROWS) {
      console.log("Invalid number of lines. Choose between 1 and 3.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet < MIN_BET) {
      console.log(`Invalid input. Please enter a number greater than or equal to $${MIN_BET}.`);
    } else if (numberBet > balance / lines) {
      console.log(`Insufficient balance. You have $${balance} available. Please enter a smaller amount.`);
    } else if (numberBet > MAX_BET) {
      console.log(`Bet exceeds maximum limit of $${MAX_BET}. Please enter a smaller amount.`);
    } else if (numberBet % 1 !== 0) { // Ensure it's an integer
      console.log("Please enter a whole number for your bet.");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, data] of Object.entries(SYMBOLS)) {
    for (let i = 0; i < data.count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  console.log("\n--- Spin Results ---");
  for (const row of rows) {
    console.log(row.join(" | "));
  }
  console.log("---------------------");
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    const allSame = symbols.every(symbol => symbol === symbols[0]);
    if (allSame) {
      if (symbols[0] === 'A') { // Jackpot condition: 3 A's
        winnings += bet * SYMBOLS[symbols[0]].value * 2; // Double winnings for A's
      } else {
        winnings += bet * SYMBOLS[symbols[0]].value;
      }
    }
  }
  return winnings;
};

const playRound = (balance, highestBalance) => {
  const numberOfLines = getNumberOfLines();
  const bet = getBet(balance, numberOfLines);
  const totalBet = bet * numberOfLines;
  balance -= totalBet;

  const reels = spin();
  const rows = transpose(reels);
  printRows(rows);

  const winnings = getWinnings(rows, bet, numberOfLines);
  balance += winnings;

  if (balance > highestBalance) {
    highestBalance = balance; // Track the highest balance
  }

  console.log(`You won $${winnings}. Current balance: $${balance}`);
  return { balance, totalBet, winnings, highestBalance };
};

const game = () => {
  let balance = deposit();
  let highestBalance = balance; // Track the highest balance reached during the game
  let totalWinnings = 0;
  let totalBets = 0;

  while (true) {
    console.log(`\nCurrent balance: $${balance}`);
    const { balance: newBalance, totalBet, winnings, highestBalance: newHighestBalance } = playRound(balance, highestBalance);
    balance = newBalance;
    highestBalance = newHighestBalance;
    totalBets += totalBet;
    totalWinnings += winnings;

    if (balance <= 0) {
      console.log("You ran out of money! Game over.");
      break;
    }

    const playAgain = prompt("Do you want to play again? (y/n): ");
    if (playAgain.toLowerCase() !== "y") {
      const netProfitLoss = totalWinnings - totalBets;
      console.log(`\nThanks for playing! Final balance: $${balance}.`);
      console.log(`Total amount bet: $${totalBets}`);
      console.log(`Total winnings: $${totalWinnings}`);
      console.log(`Net ${netProfitLoss >= 0 ? "profit" : "loss"}: $${netProfitLoss}`);
      console.log(`Highest balance reached: $${highestBalance}`);
      break;
    }
  }
};

game();
