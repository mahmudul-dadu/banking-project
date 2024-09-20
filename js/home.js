// console.log('home added');

// add money to the account
/* s-1: add event handler
       prevent page reload afted from submit
   s-2: get money to be added to the acccount balance
   s-3: 
*/

// step-1: add event handler to the add money button inside the formet
document.getElementById('btn_add_money')
    .addEventListener('click', function(event){
        // prevent page reload after from submit
        //event.preventDefault();
        console.log('money add btn clicked');
        // step -2 : get money to be added to the account
        const addMoneyInput = document.getElementById('input_add_money').value;
        console.log(addMoneyInput);

        // get the pin number provided
        const pinNumberProvided = document.getElementById('input_pin_number').value;
        console.log(pinNumberProvided);

});