//Today's date and time

const today = new Date();
const day = today.getDay();
const daylist = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(`Today is: ${daylist[day]}.`);

let hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM" ;

hour = (hour >= 12) ? hour - 12 : hour ;

if(hour == 0 && prepand == "PM"){
    if(minutes == 0 && seconds == 0){
        hour = 12;
        prepand = `Noon`;
    }else {
        hour = 12;
        prepand = `PM` ;
    }
}

if(hour == 0 && prepand == "AM"){
    if(minutes === 0 && seconds === 0){
        hour = 12;
        prepand = `Midnight`
    }else {
        hour = 12;
        prepand = `AM`;
    }
}

console.log(`Current Time: ${hour}${prepand} : ${minutes} : ${seconds}`);
// console.log(`Current Date: ${day}, ${}`)