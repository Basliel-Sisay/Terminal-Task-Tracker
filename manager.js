const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'task.json');
const task = fs.readFileSync(filePath, 'utf-8');
let finalTask = JSON.parse(task);

function addTask(taskName){
    const taskObject ={
        "id": finalTask.length + 1,
        "Name": taskName,
        "Completed": false,
        "CreatedAt" : new Date().toLocaleDateString()
    }
    finalTask.push(taskObject);
    saveChanges();
}

function listTask(){
    finalTask.forEach(task => {
        const status = task.Completed ? "[✔]" : "[ ]";
        const date = task.CreatedAt || "Legacy Task";
        console.log(`${task.id}. ${status} ${task.Name} (${date})`);
    });
    let len = finalTask.length;
    let complete = 0;
    complete = finalTask.filter(task => task.Completed === true);
    let store = complete.length;
    if(len ===0){
        return ;
    }
    let progress = (store/len) * 100;
    let filledBlock = Math.round(progress/10);
    let emptyBlock = 10 - filledBlock;
    const bar = "█".repeat(filledBlock) + "░".repeat(emptyBlock);
    console.log(`Progress: ${bar} ${progress}%`);
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

function active(){
    let remainingTasks= finalTask.filter(task => task.Completed === false);
    const reassingment = remainingTasks.map((task, index)=>({
        id: index + 1,   
        Name: task.Name,
        Completed: task.Completed,
        CreatedAt: task.CreatedAt,

    }));
    finalTask = reassingment;
    saveChanges();
}

function saveChanges(){
const finalFile = JSON.stringify(finalTask , null , 2);
fs.writeFileSync(filePath, finalFile);
}

module.exports={
 addTask,
 remove,
 toggleTask,
 listTask,
 active,
};