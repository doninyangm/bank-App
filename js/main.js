function Account(accountName, openingBalane){
    this.accountName = accountName;
    this.accountBalance = openingBalane;
    this.deposit = function(amount){
        this.accountBalance += amount;
        return this.accountBalance;
    }
    this.withdraw = function(amount){
        this.accountBalance -= amount
        return this.accountBalance;
    }
}
