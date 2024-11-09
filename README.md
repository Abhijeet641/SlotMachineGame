# Slot Machine Game

This is a simple text-based Slot Machine game built with JavaScript. Players can deposit money, place bets, and spin the reels. The game includes a payout system based on different symbols, including a jackpot for matching three 'A' symbols. Track your balance, winnings, and play multiple rounds.

## Features

- **Deposit & Bet**: Deposit funds and place bets on 1-3 lines.
- **Reel Spin**: Spin the reels and try to match symbols for winnings.
- **Jackpot**: Double your bet if 3 'A' symbols match on a line.
- **Balance Tracking**: View current balance, total bets, and winnings.
- **Play Again**: Option to play again or quit.

## Symbols and Payouts

| Symbol | Count | Value | Description |
|--------|-------|-------|-------------|
| A      | 2     | 5     | Highest payout symbol |
| B      | 4     | 4     | Mid-tier payout symbol |
| C      | 6     | 3     | Lower payout symbol |
| D      | 8     | 2     | Lowest payout symbol |

### Jackpot:
- If three "A" symbols appear on a line, your winnings for that line are doubled.

## How to Play

1. **Start the Game**:
   - Run the `slotMachine.js` file in a Node.js environment.
   - Enter your deposit amount. Type `q` to quit anytime.

2. **Bet**:
   - Select the number of lines (1-3) you want to bet on.
   - Enter the amount you'd like to bet per line.

3. **Spin**:
   - Spin the reels and see if you win based on symbol combinations.

4. **Play Again**:
   - After each round, you can play again or quit.

## Requirements

- [Node.js](https://nodejs.org/) (v12 or higher)
- `prompt-sync` package to handle user input.

Install dependencies by running:


## How to Run

1. Clone the repository or download the project.
2. Install dependencies by running the command above.
3. Open a terminal, navigate to the project directory, and run:

1. Install Node.js if not already installed.
2. Run the game with:
   ```bash
   node SlotMachine.js

   
Follow the on-screen prompts to play!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



