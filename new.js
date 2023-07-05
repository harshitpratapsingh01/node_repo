// const http = require('http');

// console.log(http.METHODS);


let person = {
    fullname : function(role){
        return this.firstname + " " + this.lastname + "," + role;
    }
}

let person1 = {
    firstname:"Harshit",
    lastname:"Pratap"
}

console.log(person.fullname.call(person1, "Trainee"));


