document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
   const cashOutAmmout = document.getElementById('input-cash-out').value;
    const cashOutAmmoutNumber = parseFloat(cashOutAmmout);
    

   const cashOutPin = document.getElementById('input-cash-out-pin').value;
    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        newBalance = balance - cashOutAmmout;
        console.log (newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong pin');
    }

})