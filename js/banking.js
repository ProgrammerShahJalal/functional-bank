document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeText = depositeTotal.innerText;
    const previousdepositeTotalAmount = parseFloat(depositeText);
    depositeTotal.innerText = previousdepositeTotalAmount + depositeAmount;

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceText);
    balanceTotal.innerText = previousBalanceTotalAmount + depositeAmount;

    // clear the deposite input field
    depositeInput.value = '';
});
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputTotal = parseFloat(withdrawInputText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawInputTotal;

    // update balance total after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceText);
    balanceTotal.innerText = previousBalanceTotalAmount - withdrawInputTotal;

    // clear the withdraw input field
    withdrawInput.value = '';
});
