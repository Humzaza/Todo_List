import './addingTasks.css';
const addTask = () => {
    let taskList = document.querySelector('.taskList');
    getTaskInfo();
    let taskInfo = taskCreater();

    let taskDiv = document.createElement('div');

    taskList.appendChild(taskDiv);
};

function getTaskInfo() {
    dimScreen();
    let dim = document.querySelector('.dim');

    let infoDiv = document.createElement('div');
    infoDiv.className = 'infoDiv';
    dim.appendChild(infoDiv);

}

function dimScreen() {
    let dimScreen = document.createElement('div');
    dimScreen.className = 'dim';
    dimScreen.style.backgroundColor = 'rgba(68, 61, 61, 0.442)';
    dimScreen.style.height = '100%';
    dimScreen.style.width = '100%';
    dimScreen.style.position = 'absolute';
    dimScreen.style.display = 'flex';
    dimScreen.style.justifyContent = 'center';
    dimScreen.style.alignItems = 'center';
    let layout = document.querySelector('.layout');
    layout.appendChild(dimScreen);
}


function taskCreater(name, description, dueDate, priot) {
    return {

    };
}




export default addTask;