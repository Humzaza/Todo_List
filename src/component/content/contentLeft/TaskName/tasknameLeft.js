import { getTaskRecord } from '../../../taskmanager/taskChecker';
import './tasknameLeft.css';

const showTaskName = () => {
    let taskRecord = getTaskRecord();
    let taskList = document.querySelector('.taskList');
    taskList.textContent = '';
    taskRecord.forEach((element) => {
        let div = document.createElement('div');
        div.textContent = element.name;
        taskList.appendChild(div);
    });
};

export default showTaskName;