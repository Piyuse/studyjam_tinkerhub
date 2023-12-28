"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(birthyear) {
    var c_year = new Date().getFullYear();
    var age = c_year - birthyear;
    return age >= 18;
}
function registerUser(name, birthyear) {
    var value = checkAge(birthyear);
    if (value === true)
        console.log('user registration success');
    else
        console.log('user registration failed');
}
registerUser('jamalu', 2002);
registerUser('mahira', 2012);
