const fs = require('fs');
const task = fs.readFileSync('./task.json', 'utf-8');
let finalTask = JSON.parse(task);

function addTask(taskName){
    const taskObject ={
        "id": finalTask.length + 1,
        "Name": taskName,
        "Completed": false,
    }
    finalTask.push(taskObject);
    saveChanges();
}

function listTask(){
    finalTask.forEach(task => {
        const status = task.Completed ? "[✔]" : "[ ]";
        console.log(`${task.id}. ${status} ${task.Name}`);
    });
}

function toggleTask(id){
    const finder = finalTask.find(i => i.id === id);
    if(finder){
        finder.Completed = !finder.Completed;
    }
    saveChanges();
}

function remove(id){
     finalTask = finalTask.filter(tasks => tasks.id !== id);
    saveChanges();
}

function saveChanges(){
const finalFile = JSON.stringify(finalTask , null , 2);
fs.writeFileSync('./task.json', finalFile);
}

module.exports={
 addTask,
 remove,
 toggleTask,
 listTask,
};