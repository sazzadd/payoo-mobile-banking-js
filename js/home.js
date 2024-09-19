document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    adMoneyInput = document.getElementById('input-add-money').value;
    inputPinNumber = document.getElementById('input-pin-number').value;
    // console.log(adMoneyInput);
    // console.log(inputPinNumber);
    if(inputPinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        adMoneyNumber = parseFloat(adMoneyInput);
        balanceNumber =parseFloat(balance);
        console.log (typeof adMoneyNumber);
        console.log (typeof balanceNumber);
        newbalance =  balanceNumber + adMoneyNumber;
        console.log (newbalance);
        document.getElementById('account-balance').innerText = newbalance;
    }
    else{
        alert('wrong pin');
    }

})
