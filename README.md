# Slot Machine Game

A simple, interactive Slot Machine game implemented in JavaScript, played in the terminal. This project lets users place bets, spin the reels, and potentially win prizes based on matching symbols.

## Features

- **Deposit**: Allows users to deposit money to start the game.
- **Betting Lines**: Users can choose between 1 to 3 lines to bet on.
- **Bet Amount**: Players decide the amount to bet per line.
- **Randomized Spins**: Simulates spinning reels with random symbols.
- **Winnings Calculation**: Calculates winnings based on matched symbols.
- **Play Again Option**: Players can continue playing until they run out of balance.

## Game Rules

- **Symbols and Values**:
  - Symbol `A` appears twice and has a value of 5.
  - Symbol `B` appears four times and has a value of 4.
  - Symbol `C` appears six times and has a value of 3.
  - Symbol `D` appears eight times and has a value of 2.
- **Winning Criteria**: Players win when all symbols in a line match. The winnings are calculated by multiplying the bet amount by the symbol value.

## How to Play

1. Run the program in a Node.js environment.
2. Enter a deposit amount to start the game.
3. Select the number of lines (1-3) to bet on.
4. Enter the bet amount per line (must be within available balance).
5. The reels will spin and display symbols.
6. Winnings are added to the balance if any line has matching symbols.
7. Choose to play again or quit if the balance runs out.

## Requirements

- **Node.js**: Install Node.js to run the game using the `prompt-sync` package for user input.

## How to Run

1. Install Node.js if not already installed.
2. Run the game with:
   ```bash
   node SlotMachine.js

