//strict rules

'use strict'

//create an array with some fake mail (all g.mail)

const mailsList = ["fakemail1@gmail.com", "fakemail2@gmail.com", "fakemail3@gmail.com", "fakemail4@gmail.com"];

//creating a const variable from user prompt 

const userMail = (prompt('insert your e-mail'));

//creating a let boolean variable 

let joinCheck = false;
let message = 'Access denied';

//cycle for compare usermail with mail in the array

for ( let i = 0; i  < mailsList.length; i++) {

    if ( mailsList [i] === userMail ) {

        joinCheck = true;

    }
}

if ( joinCheck === true ) {

    message = 'Welcome';

} 

document.querySelector("h1").innerHTML = `${message}`;