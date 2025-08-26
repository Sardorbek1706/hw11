let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {
        if(this[type] !== undefined) {
            this[type] += amount;
        }
    },
    removeExpense: function(type, amount) {
        if(this[type] !== undefined) {
            this[type] -= amount;
        }
    },
    printMonthlyReport: function() {
        console.log(`Suv uchun oylik xarajat: $${this.water}`);
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`);
    }
};

function runExpenses() {
    Expenses.addExpense("water", 25);
    Expenses.addExpense("gas", 40);
    Expenses.addExpense("electricity", 60);
    Expenses.printMonthlyReport();
    Expenses.removeExpense("gas", 10);
    Expenses.printMonthlyReport();
}

runExpenses();
