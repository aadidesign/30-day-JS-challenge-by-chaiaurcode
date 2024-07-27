
// Task 9
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }
}

// Task 10
const account1 = new Account(100);
account1.deposit(50);
account1.withdraw(30);
account1.withdraw(150);
