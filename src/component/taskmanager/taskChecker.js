let taskRecord = [];


const taskChecker = (selectedPriority) => {
    let taskName = document.getElementById('title');
    let discription = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');
    let notes = document.getElementById('notes');    
    let formDiv = document.querySelector('.infoDiv');
    let dim = document.querySelector('.dim');

    let taskExist = false;

    taskRecord.forEach(element => {
        let taskName = document.getElementById('title');
        console.log(element.taskName);
        if (taskName == element.taskName) {
            taskExist = true;
            alert();
        }
    });

    if (taskName.value != '' && discription.value != '' && dueDate.value != '' && taskExist == false) {
        taskAdder(taskName, discription, dueDate, selectedPriority, notes);
        formDiv.style.display = 'none';
        dim.style.display = 'none';    
    }
};


const taskAdder = (taskName, discription, dueDate, priority, notes) => {
    
    let task = taskCreater(taskName.value, discription.value, dueDate.value, priority, notes.value);
    taskRecord.push(task);
    
};

function taskCreater(name, description, dueDate, priority, notes) {
    return {
        name,
        description,
        dueDate,
        priority,
        notes
    };
}

taskRecord.push(taskCreater('1', '1', '324', 'high', 'none'));
taskRecord.push(taskCreater('2', '1', '324', 'high', 'none'));
console.log(taskRecord);

export default taskChecker;