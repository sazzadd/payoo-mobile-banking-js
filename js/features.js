document.getElementById('show-cash-out-btn')
.addEventListener('click',function(){
    // console.log('show-cash-out-btn')
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('show-add-money-btn')
.addEventListener('click',function(){
    // console.log('show-cash-out-btn')
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})



// document.getElementById('show-add-money-btn').addEventListener('click',function(){
//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cash-out-form').classList.add('hidden');
// })