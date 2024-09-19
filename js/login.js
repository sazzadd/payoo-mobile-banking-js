document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('click');
    const phoneNumbber = document.getElementById('phone-number').value;
    const pinNumbber = document.getElementById('pin-number').value;
    console.log(phoneNumbber,pinNumbber);
    if(phoneNumbber ==='5' && pinNumbber=== '1234'){
        console.log('loged in');
        window.location.href = "/home.html";
    }
    else{
        alert('worng npassword')
    }
})