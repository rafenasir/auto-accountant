let assets = {
    debit: 0,
    credit: 0
};

var expenses = {
    debit: 0,
    credit: 0
};
let incomes = {
    debit: 0,
    credit: 0
};
let liabilities = {
    debit: 0,
    credit: 0
};
let equity = {
    debit: 0,
    credit: 0
};
let finalValues = {
    expenses: 0,
    assets: 0,
    incomes: 0,
    liabilities: 0,
    equity: 0
}
let totals = {
    trialBalanceAsset: 0,
    trialBalanceEquityLiability: 0,
    profitLossIncome: 0,
    profitLossExpense: 0

};
let profitLoss = 0;



// formulas to find the final value or heads
function expensesValue() {
    finalValues.expenses = expenses.debit - expenses.credit;
    document.getElementById("exp").innerHTML = finalValues.expenses;
}

function assetsValue() {
    finalValues.assets = assets.debit - assets.credit;
    document.getElementById("ass").innerHTML = finalValues.assets;
}

function incomeValue() {
    finalValues.incomes = incomes.credit - incomes.debit;
    document.getElementById("inc").innerHTML = finalValues.incomes;
}

function equityValue() {
    finalValues.equity = equity.credit - equity.debit;
    document.getElementById("equity").innerHTML = finalValues.equity;

}

function liabilitiesValue() {
    finalValues.liabilities = liabilities.credit - liabilities.debit;
    document.getElementById("liab").innerHTML = finalValues.liabilities;
}





// let x = parseInt(document.getElementById('amount').value);
function findValue(x) {
    if (document.getElementById("amount").value) {

        if (document.getElementById("inputGroupSelect01").value === "1") {
            expenses.debit = expenses.debit + x;
            expensesValue();
            // valuesTotal();
            document.getElementById("amount").value = null
            return expenses.debit

        }
        //to decrease the value of expense.
        else if (document.getElementById("inputGroupSelect01").value == "2") {
            expenses.credit = expenses.credit + x;
            expensesValue();
            document.getElementById("amount").value = null
            return expenses.credit
        }
        // Increase Assets
        else if (document.getElementById("inputGroupSelect01").value == "3") {
            assets.debit = assets.debit + x;
            assetsValue();
            // valuesTotal();
            document.getElementById("amount").value = null
            return assets.debit;

        }
        // decrease asset
        else if (document.getElementById("inputGroupSelect01").value == "4") {
            assets.credit = assets.credit + x;
            assetsValue();
            // valuesTotal();
            document.getElementById("amount").value = null
            return assets.credit

        }
        // Increase Income
        else if (document.getElementById("inputGroupSelect01").value == "5") {
            incomes.credit = incomes.credit + x;
            incomeValue();
            document.getElementById("amount").value = null
            return incomes.credit
        }
        // decrease income
        else if (document.getElementById("inputGroupSelect01").value == "6") {
            incomes.debit = incomes.debit + x;
            incomeValue();
            document.getElementById("amount").value = null
            return incomes.debit

        }
        // liabilities increased
        else if (document.getElementById("inputGroupSelect01").value == "7") {
            liabilities.credit = liabilities.credit + x;
            liabilitiesValue();
            document.getElementById("amount").value = null
            return liabilities.credit

        }
        // liabilities decreased
        else if (document.getElementById("inputGroupSelect01").value == "8") {
            liabilities.debit = liabilities.debit + x;
            liabilitiesValue();
            document.getElementById("amount").value = null
            return liabilities.debit
        }

        // equity increased
        else if (document.getElementById("inputGroupSelect01").value == "9") {
            equity.credit = equity.credit + x;
            equityValue();
            document.getElementById("amount").value = null
            return equity.credit
        }
        // equity decreased
        else if (document.getElementById("inputGroupSelect01").value == "10") {
            equity.debit = equity.debit + x;
            equityValue();
            document.getElementById("amount").value = null
            return equity.debit
        } else {
            alert("Please Choose a Head")
        }
    }
}

//Values Total
function valuesTotal() {
    totals.trialBalanceAsset = finalValues.assets;
    document.getElementById("total-trialBalanceDr").innerHTML = totals.trialBalanceAsset;
    totals.trialBalanceEquityLiability = finalValues.liabilities + finalValues.equity;
    document.getElementById("total-trialBalanceCr").innerHTML = totals.trialBalanceEquityLiability;
    totals.profitLossIncome = finalValues.incomes;
    document.getElementById("total-ProfitLossCr").innerHTML = totals.profitLossIncome;
    totals.profitLossExpense = finalValues.expenses;
    document.getElementById("total-ProfitLossDr").innerHTML = totals.profitLossExpense;

}
// calculation of Profit and Loss
function profitLossFigure() {
    //debugger
    profitLoss = totals.profitLossIncome - totals.profitLossExpense;
    document.getElementById("profitLoss").innerHTML = profitLoss;
    return profitLoss;
}