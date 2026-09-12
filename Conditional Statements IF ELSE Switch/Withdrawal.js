//Nested If Else example 

let accountBalance = 10000;
let WithdrawalAmmount = 5000;

if (WithdrawalAmmount > 0) {

    if (WithdrawalAmmount <= accountBalance) {
        console.log("Withdrawal Successfull");

    }else if (WithdrawalAmmount > accountBalance){
        console.log("insufficent balance");

    }

}else{
    console.log("Invalid ammount");
}

