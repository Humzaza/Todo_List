import addTask from './AddingTasks/addingTasks';
import './contentLeft.css';

const contentLeft = () => {
    let contentLeft = document.createElement('div');
    contentLeft.className = 'leftContent';

    let task = document.createElement('div');
    task.className = 'tasks';

    let taskAdd = document.createElement('div');
    taskAdd.className = 'taskAdd';

    let taskHeader = document.createElement('h2');
    taskHeader.textContent = 'Tasks';
    taskAdd.appendChild(taskHeader);

    let addBut = document.createElement('button');
    addBut.className = 'add';
    addBut.textContent = '+';
    taskAdd.appendChild(addBut);

    let taskList = document.createElement('div');
    taskList.className = 'taskList';
    addBut.addEventListener('click', addTask);

    let tempTask = document.createElement('div');
    tempTask.textContent = '';

    taskList.appendChild(tempTask);

    task.appendChild(taskAdd);
    task.appendChild(taskList);

    contentLeft.appendChild(task);
    
    let tempProDiv = document.createElement('div');
    tempProDiv.className = 'project';
    tempProDiv.textContent = 'adf';
    contentLeft.appendChild(tempProDiv);

    return contentLeft;
};

export default contentLeft;