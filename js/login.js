//console.log("input password added");
//document.getElementById('id').addEventListener('click', fun).

//Event.preventDefault(): void
// If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

// search : from submit reloading the page 

// step 1: set event handler
// document.getElementById('button_login').addEventListener('click', function (event) {
//     // event 2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); // < ----- vejal lagbe
//     console.log('login button click')

//     // step -3: get the phone number and the pin number 
//     const phoneNumber = document.getElementById('phone_number').value;
//     const pinNumber = document.getElementById('phone_number').value;                         
//     console.log(phoneNumber, pinNumber);

//     //  step -4: validate phone and Pin
     

//     // this is temporary. you should do like this
//     if(phoneNumber === '5' && pinNumber === '1234') {
//         console.log('you are logged in');
//     }
//     else {
//         alert ('Wrong phone number or Pin')
//     }


// })

document.getElementById('button_login')
    .addEventListener('click', function(event){
        //console.log('cheak clicked');
        event.preventDefault();

        //get number 
        const phoneNumber = document.getElementById('phone_number').value;
        const pinNumber = document.getElementById('pin_number').value;
       // console.log(phoneNumber,pinNumber);
        if(phoneNumber ===  '5' && pinNumber === '12345') {
            console.log('you are logged in');
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong phone number and pin')
        }
    })