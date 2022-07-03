import './addingTasks.css';
const addTask = () => {
    let taskList = document.querySelector('.taskList');
    settingLayout();

    let taskDiv = document.createElement('div');

    taskList.appendChild(taskDiv);
};

function settingLayout() {
    dimScreen();
    let dim = document.querySelector('.dim');

    let infoDiv = document.createElement('div');
    infoDiv.className = 'infoDiv';
    dim.appendChild(infoDiv);

    let infoDivTitle = document.createElement('div');
    infoDivTitle.className = 'infoDivTitle';

    let taskH2 = document.createElement('h2');
    taskH2.className = 'infoTitle';
    taskH2.textContent = 'Task Information';

    infoDivTitle.appendChild(taskH2);

    infoDiv.appendChild(infoDivTitle);

    ////////////////////////Form Creation///////////////////////////////

    let infoDivForm = document.createElement('form');
    infoDivForm.setAttribute('action', '');
    infoDivForm.setAttribute('method', 'post');
    infoDivForm.setAttribute('onsubmit', 'return false');
    infoDivForm.className = 'infoDivForm';

    let titleDiv = document.createElement('div');
    titleDiv.className = 'titleDiv';

    let title = document.createElement('label');
    title.setAttribute('for', 'title');
    title.textContent = 'Title';

    titleDiv.appendChild(title);

    infoDivForm.appendChild(titleDiv);

    infoDiv.appendChild(infoDivForm);

    let titleDiv2 = document.createElement('div');
    titleDiv2.className = 'titleDiv';
    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('id', 'title');
    titleDiv2.appendChild(inputTitle);

    infoDivForm.appendChild(titleDiv2);

    let discriptDiv1 = document.createElement('div');
    discriptDiv1.className = 'discriptDiv';

    let discription = document.createElement('label');
    discription.setAttribute('for', 'description');
    discription.textContent = 'Description';

    discriptDiv1.appendChild(discription);

    infoDivForm.appendChild(discriptDiv1);

    let discriptDiv = document.createElement('div');
    discriptDiv.className = 'discriptDiv';
    let inputDiscript = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'description');
    inputTitle.setAttribute('id', 'description');
    discriptDiv.appendChild(inputDiscript);

    infoDivForm.appendChild(discriptDiv);

    let dueDiv = document.createElement('div');
    dueDiv.className = 'dueDiv';

    let dueLabel = document.createElement('label');
    dueLabel.textContent = 'Date Due';
    dueLabel.setAttribute('for', 'description');

    dueDiv.appendChild(dueLabel);

    infoDivForm.appendChild(dueDiv);

    let dueDiv2 = document.createElement('div');
    dueDiv2.className = 'dueDiv';

    let inputDueDate = document.createElement('input');
    inputDueDate.setAttribute('type', 'text');
    inputDueDate.setAttribute('name', 'dueDate');
    inputDueDate.setAttribute('id', 'dueDate');

    dueDiv2.appendChild(inputDueDate);

    infoDivForm.appendChild(dueDiv2);

    let prioDiv = document.createElement('div');
    prioDiv.className = 'prioDiv';

    let prioLabel = document.createElement('label');
    prioLabel.textContent = 'Priority';
    prioLabel.setAttribute('for','priority');
    prioDiv.appendChild(prioLabel);

    infoDivForm.appendChild(prioDiv);

    let prioDivBtn = document.createElement('div');
    prioDivBtn.className = 'prioDivBtn';

    let lowBtn = document.createElement('button');
    lowBtn.setAttribute('id','low');
    lowBtn.textContent = 'Low';
    let medBtn = document.createElement('button');
    medBtn.setAttribute('id','med');
    medBtn.textContent = 'Medium';
    let highBtn = document.createElement('button');
    highBtn.setAttribute('id','high');
    highBtn.textContent = 'High';

    prioDivBtn.appendChild(lowBtn);
    prioDivBtn.appendChild(medBtn);
    prioDivBtn.appendChild(highBtn);

    infoDivForm.appendChild(prioDivBtn);

    let notesDiv = document.createElement('div');
    notesDiv.className = 'notesDiv';

    let notesLabel = document.createElement('label');
    notesLabel.setAttribute('for', 'notes');
    notesLabel.textContent = 'Notes';

    notesDiv.appendChild(notesLabel);
    
    let notesText = document.createElement('textarea');
    notesText.setAttribute('name', 'notes');
    notesText.setAttribute('id', 'notes');
    notesText.setAttribute('cols', '30');
    notesText.setAttribute('rows', '5');
    
    notesDiv.appendChild(notesText);

    infoDivForm.appendChild(notesDiv);

    let submitDiv = document.createElement('div');
    submitDiv.className = 'submitDiv';

    let cancelBtn = document.createElement('button');
    cancelBtn.className = 'submitBtn';
    cancelBtn.setAttribute('id','cancel');
    cancelBtn.textContent = 'Cancel';
    
    let submitBtn = document.createElement('button');
    submitBtn.className = 'submitBtn';
    submitBtn.setAttribute('id','save');
    submitBtn.textContent = 'Save Task';

    submitDiv.appendChild(cancelBtn);
    submitDiv.appendChild(submitBtn);

    infoDivForm.appendChild(submitDiv);

}

function dimScreen() {
    let dimScreen = document.createElement('div');
    dimScreen.className = 'dim';
    let layout = document.querySelector('.layout');
    layout.appendChild(dimScreen);
}


function taskCreater(name, description, dueDate, priot) {
    return {

    };
}




export default addTask;