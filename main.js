function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || 0
};

function setIntoStorage(key, value = 0) {
    return localStorage.setItem(key, JSON.stringify(value))
};
let assets = {
    debit: getFromStorage("debitAssets"),
    credit: getFromStorage("creditAsset")
};

let expenses = {
    debit: getFromStorage("debitExpense"),
    credit: getFromStorage("creditExpense")
};
let incomes = {
    debit: getFromStorage("debitIncome"),
    credit: getFromStorage("creditIncome")
};
let liabilities = {
    debit: getFromStorage("creditLiabilities"),
    credit: getFromStorage("creditLiabilities")
};
let equity = {
    debit: getFromStorage("debitEquity"),
    credit: getFromStorage("creditEquity")
};
let finalValues = {
    expenses: getFromStorage("expenses"),
    assets: getFromStorage("assets"),
    incomes: getFromStorage("incomes"),
    liabilities: getFromStorage("liabilities"),
    equity: getFromStorage("equity")
}
let totals = {
    trialBalanceAsset: getFromStorage("assets"),
    trialBalanceEquityLiability: 0,
    profitLossIncome: 0,
    profitLossExpense: 0

};
let profitLoss = 0;

// // let temp1 = null;
// if (ocument.getElementById("template").content){
// let temp1 = document.getElementById("template").content;}
// let tempTag = document.importNode(temp1, true);




// formulas to find the final value or heads
// function expensesValue() {
//     finalValues.expenses = expenses.debit - expenses.credit;
//     localStorage.setItem("expenses", JSON.stringify(finalValues.expenses));
//     document.getElementById("exp").innerHTML = JSON.parse(localStorage.getItem("expenses"));
// }

// function assetsValue() {
//     finalValues.assets = assets.debit - assets.credit;
//     localStorage.setItem("assets", JSON.stringify(finalValues.assets));

//     document.getElementById("ass").innerHTML = JSON.parse(localStorage.getItem("assets"));
// }

// function incomeValue() {
//     finalValues.incomes = incomes.credit - incomes.debit;
//     localStorage.setItem("income", JSON.stringify(finalValues.incomes));

//     document.getElementById("inc").innerHTML = JSON.parse(localStorage.getItem("income"));
// }

// function equityValue() {
//     finalValues.equity = equity.credit - equity.debit;
//     localStorage.setItem("equity", JSON.stringify(finalValues.equity));

//     document.getElementById("equity").innerHTML = JSON.parse(localStorage.getItem("equity"));

// }

// function liabilitiesValue() {
//     finalValues.liabilities = liabilities.credit - liabilities.debit;
//     localStorage.setItem("liability", JSON.stringify(finalValues.liabilities));

//     document.getElementById("liab").innerHTML = JSON.parse(localStorage.getItem("liability"));
// }




// let x = parseInt(document.getElementById('amount').value);

function findValue(x) {
    if (document.getElementById("amount").value) {

        if (document.getElementById("inputGroupSelect01").value === "1") {
            expenses.debit = JSON.parse(localStorage.getItem("debitExpense")) + x;
            localStorage.setItem("debitExpense", JSON.stringify(expenses.debit));
            headsValue()
                // expensesValue();
                // valuesTotal();
            document.getElementById("amount").value = null

        }
        //to decrease the value of expense.
        else if (document.getElementById("inputGroupSelect01").value == "2") {

            expenses.credit = JSON.parse(localStorage.getItem("creditExpense")) + x;
            localStorage.setItem("creditExpense", JSON.stringify(expenses.credit));
            // expensesValue();
            headsValue()
            document.getElementById("amount").value = null
        }
        // Increase Assets
        else if (document.getElementById("inputGroupSelect01").value == "3") {
            assets.debit = getFromStorage("debitAssets") + x;
            localStorage.setItem("debitAssets", JSON.stringify(assets.debit));
            headsValue()
                // assetsValue();
                // valuesTotal();
            document.getElementById("amount").value = null

        }
        // decrease asset
        else if (document.getElementById("inputGroupSelect01").value == "4") {
            assets.credit = JSON.parse(localStorage.getItem("creditAsset")) + x;
            localStorage.setItem("creditAsset", JSON.stringify(assets.credit));
            // assetsValue();
            // valuesTotal();
            headsValue()
            document.getElementById("amount").value = null
            return assets.credit

        }
        // Increase Income
        else if (document.getElementById("inputGroupSelect01").value == "5") {
            incomes.credit = JSON.parse(localStorage.getItem("creditIncome")) + x;
            localStorage.setItem("creditIncome", JSON.stringify(incomes.credit));
            // incomeValue();
            headsValue()
            document.getElementById("amount").value = null
            return incomes.credit
        }
        // decrease income
        else if (document.getElementById("inputGroupSelect01").value == "6") {
            incomes.debit = JSON.parse(localStorage.getItem("debitIncome")) + x;
            localStorage.setItem("debitIncome", JSON.stringify(incomes.debit));
            // incomeValue();
            headsValue()
            document.getElementById("amount").value = null
            return incomes.debit

        }
        // liabilities increased
        else if (document.getElementById("inputGroupSelect01").value == "7") {
            liabilities.credit = JSON.parse(localStorage.getItem("creditLiabilities")) + x;
            localStorage.setItem("creditLiabilities", JSON.stringify(liabilities.credit));
            // liabilitiesValue();
            headsValue()
            document.getElementById("amount").value = null
            return liabilities.credit

        }
        // liabilities decreased
        else if (document.getElementById("inputGroupSelect01").value == "8") {
            liabilities.debit = JSON.parse(localStorage.getItem("debitLiabilities")) + x;
            localStorage.setItem("debitLiabilities", JSON.stringify(liabilities.debit));
            // liabilitiesValue();
            headsValue()
            document.getElementById("amount").value = null
            return liabilities.debit
        }

        // equity increased
        else if (document.getElementById("inputGroupSelect01").value == "9") {
            equity.credit = JSON.parse(localStorage.getItem("creditEquity")) + x;
            localStorage.setItem("creditEquity", JSON.stringify(equity.credit));
            // equityValue();
            headsValue()
            document.getElementById("amount").value = null
            return equity.credit
        }
        // equity decreased
        else if (document.getElementById("inputGroupSelect01").value == "10") {
            equity.debit = JSON.parse(localStorage.getItem("debitEquity")) + x;
            localStorage.setItem("debitEquity", JSON.stringify(equity.debit));
            // equityValue();
            headsValue()
            document.getElementById("amount").value = null
            return equity.debit
        } else {
            alert("Please Choose a Head")
        }
    }
}

function headsValue() {
    finalValues.expenses = JSON.parse(localStorage.getItem("debitExpense")) - JSON.parse(localStorage.getItem("creditExpense"));
    localStorage.setItem("expenses", JSON.stringify(finalValues.expenses));
    document.getElementById("exp").innerHTML = JSON.parse(localStorage.getItem("expenses"));

    finalValues.assets = JSON.parse(localStorage.getItem("debitAssets")) - JSON.parse(localStorage.getItem("creditAsset"));
    localStorage.setItem("assets", JSON.stringify(finalValues.assets));
    document.getElementById("ass").innerHTML = JSON.parse(localStorage.getItem("assets"));

    finalValues.incomes = JSON.parse(localStorage.getItem("creditIncome")) - JSON.parse(localStorage.getItem("debitIncome"));
    localStorage.setItem("incomes", JSON.stringify(finalValues.incomes));
    document.getElementById("inc").innerHTML = JSON.parse(localStorage.getItem("incomes"));

    finalValues.equity = JSON.parse(localStorage.getItem("creditEquity")) - JSON.parse(localStorage.getItem("debitEquity"));
    localStorage.setItem("equity", JSON.stringify(finalValues.equity));
    document.getElementById("equity").innerHTML = JSON.parse(localStorage.getItem("equity"));

    finalValues.liabilities = JSON.parse(localStorage.getItem("creditLiabilities")) - JSON.parse(localStorage.getItem("debitLiabilities"));
    localStorage.setItem("liabilities", JSON.stringify(finalValues.liabilities));
    document.getElementById("liab").innerHTML = JSON.parse(localStorage.getItem("liabilities"));
}

// finalValues = {
//     expenses: getFromStorage("expenses"),
//     assets: getFromStorage("assets"),
//     incomes: getFromStorage("incomes"),
//     liabilities: getFromStorage("liabilities"),
//     equity: getFromStorage("equity")

//Values Total
function valuesTotal() {
    totals.trialBalanceAsset = getFromStorage("assets");
    localStorage.setItem("assetTrialBalance", JSON.stringify(totals.trialBalanceAsset));
    document.getElementById("total-trialBalanceDr").innerHTML = getFromStorage("assetTrialBalance");

    totals.trialBalanceEquityLiability = getFromStorage("liabilities") + getFromStorage("equity");
    document.getElementById("total-trialBalanceCr").innerHTML = totals.trialBalanceEquityLiability;

    totals.profitLossIncome = getFromStorage("incomes");

    document.getElementById("total-ProfitLossCr").innerHTML = totals.profitLossIncome;
    totals.profitLossExpense = getFromStorage("expenses");
    document.getElementById("total-ProfitLossDr").innerHTML = totals.profitLossExpense;

}
// calculation of Profit and Loss
function profitLossFigure() {
    //debugger
    profitLoss = totals.profitLossIncome - totals.profitLossExpense;
    document.getElementById("profitLoss").innerHTML = profitLoss;
    return profitLoss;
}
document.addEventListener('DOMContentLoaded', function(event) {
    valuesTotal();
    headsValue();
    profitLossFigure();
    findValue();
})