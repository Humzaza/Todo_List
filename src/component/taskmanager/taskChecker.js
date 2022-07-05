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
        if (taskName.value == element.name) {
            taskExist = true;
        }
    });

    if (taskName.value != '' && discription.value != '' && dueDate.value != '' && taskExist == false) {
        // console.log(taskName.value);
        taskAdder(taskName, discription, dueDate, selectedPriority, notes);
        formDiv.style.display = 'none';
        dim.style.display = 'none';    
    }
};


const taskAdder = (taskName, discription, dueDate, priority, notes) => {
    // console.log(taskName.value)
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

export const getTaskRecord = () => {
    // console.log(taskRecord);
    return taskRecord;
};

// taskRecord.push(taskCreater('1', '1', '324', 'high', 'none'));
// taskRecord.push(taskCreater('1', '1', '324', 'low', 'none'));
// taskRecord.push(taskCreater('2', '1', '324', 'med', 'none'));
 

export default taskChecker;