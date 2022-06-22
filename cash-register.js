//Cash register function
//takes in the price, cash and cash_in_drawer (cid) and output corresponding results
//returns an object {status: "INSUFFICIENT_FUNDS", change: []} if change cannot be given
//returns an object {status: "CLOSED", change: [...]} if change is exactly equal to cash in the drawer.
//returns an object {status: "OPEN", change: [...]} if change is given and there is leftover cash in the drawer.
function checkCashRegister(price, cash, cid) {
  //table for comparing cash value and array names
  let table = {
    0.01: "PENNY",
    0.05: "NICKEL",
    0.1:  "DIME",
    0.25: "QUARTER",
    1:    "ONE",
    5:    "FIVE",
    10:   "TEN",
    20:   "TWENTY",
    100:  "ONE HUNDRED",
  }
  const keys = Object.keys(table).sort((a,b) => b-a).map(value => Number.parseFloat(value));
  const final = {
    status: '',
    change: []
  };
  const totalCash = Math.round(cid.reduce((sum, cash) => sum + cash[1], 0)*100)/100;
  let change = cash - price;

  //total change is more than cash in the drawer
  if (change > totalCash) {
    final.status = "INSUFFICIENT_FUNDS";
    final.change = [];
    return final; 
  }

  //total change is same as cash in drawer
  if (change === totalCash) {
    final.status = "CLOSED";
    final.change = [...cid];
    return final; 
  }

  //calculate the required change
  while(change > 0) {
    let temp = keys.find(cash => {
      return change >= cash & cid.find(drawer => drawer[0] == table[cash])[1] > 0
    });

    //no suitable change found
    if (temp == undefined) {
      final.status = "INSUFFICIENT_FUNDS";
      final.change = [];
      return final; 
    }

    //update arrays and find next suitable cash unit
    cid.find(drawer => drawer[0] == table[temp])[1] -= temp;
    if (final.change.find(drawer => drawer[0] == table[temp]) != undefined) 
      final.change.find(drawer => drawer[0] == table[temp])[1] += temp;
    else final.change.push([table[temp], temp]);
    change = Math.round((change - temp)*100)/100;
  }
  //change is given and there is left over in the drawer
  final.status = "OPEN";
  return final; 
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))