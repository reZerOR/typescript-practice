{
  //access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getDeposit() {
      console.log(this._balance);
    }
  }

  const goribBankAccount = new BankAccount(99, "gorib", 670)
  goribBankAccount.addDeposit(60)
  goribBankAccount.getDeposit()
}
