
// Kelly's Code


/**

 * This class handles change for a vending machine.

 * 

 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.

 */

class ChangeHandler {
    constructor(amountDue) {

        this.amountDue = amountDue;

        this.cashTendered = 0;

    }


    /**

     * The customer inserts a coin, increasing the cashTendered.

     * @param {string} type either quarter, dime, nickel, or penny

     */

    insertCoin(coin) {
        if (coin === quarter)
        this.cashTendered += 25;
        else if (coin ===  dime)
        this.cashTendered += 10;
        else if (coin === nickle)
        this.cashTendered += 5;
        else (coin === penny)
        this.cashTendered += 1;
        
    }



    /**

     * Returns true if enough coins have been inserted to at least meet the amountDue

     */

    isPaymentSufficient() {
      if (this.cashTendered > this.amountDue){
        return true;
    } else if (this.cashTendered < this.amountDue){
        return false;
    } else if (this.cashTendered === this.amountDue){
        return true;
    } else ("i didn't understand the amount entered");
    };

    // a. Returns true if cashTendered more than amountDue.
    // b. Returns false if cashTendered less than amountDue.
    // c. Returns true if cashTendered equal to amountDue.
    

    giveChange(){

        let change = this.amountDue - this.cashTendered;
        let leftOver = change % 25;
        let firstLeftOver = change - leftOver;
        let q = firstLeftOver;
        let twoLeftOver = change % 10;
        let secondLeftOver = change - twoLeftOver;
        let d = secondLeftOver;
        let thirdLeftOver = change % 5;
        let threeLeftOver = change - thirdLeftOver;
        let n = threeLeftOver;
        let p = "pennies";
        
        if (change > 25){
        change % 25 === leftOver;
        change - leftOver === firstLeftOver;
        firstLeftOver/ 25 === q;
        }

        else if (change > 10){
            change % 10 === twoLeftOver;
            change - twoLeftOver === secondLeftOver;
            secondLeftOver/ 10 === d;
        }
  
        else if(change > 5){
            change % 5 === thirdLeftOver;
            change - thirdLeftOver === threeLeftOver;
            threeLeftOver/ 5 === n;

        }
        
        else if (change > 1){

            let p = "pennies";
            console.log("you have less than 5");

        }



    
  
    

     // TODO return the correct change in the following format...


        return {

            quarters: q,

            dimes: d,

            nickels: n,

            pennies: p

        }

    }

};

let customer = new ChangeHandler(102);
customer.giveChange();
