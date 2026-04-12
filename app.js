#!/usr/bin/env node
const manager = require('./manager');

const command = process.argv[2]; 
const value = process.argv[3];
try{
if(!command){
    console.log("Hello User, Please provide a command (add, list, done, remove, clear)");
}
else if(command.toLowerCase() === 'add'){
    manager.addTask(value);
    console.log("Your "+ value+"is added successfully");
}
else if(command.toLowerCase() === 'list'){
    manager.listTask();
}
else if(command.toLowerCase() === 'done'){
    manager.toggleTask(Number(value));
    console.log("Status Update for task: " + value);
}
else if(command.toLowerCase() === 'remove'){
    manager.remove(Number(value));
    console.log("Deleted task: "+ value);
}
else if(command.toLocaleLowerCase() === 'clear'){
    manager.active();
    console.log("Completed tasks purged, database optimized");
}
else {
    console.log("Please enter a valid command and try again later");
}
} 
catch(error){
    console.error("Error command: " + error.message);
}

console.log(process.argv);