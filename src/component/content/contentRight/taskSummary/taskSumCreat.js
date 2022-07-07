import './taskSumCreat.css';
import {getTaskRecord} from '../../../taskmanager/taskChecker';

const taskSumCreat = () => {
    let taskRecord = getTaskRecord();
    let taskSum = 'test';

    taskRecord.forEach(element => {
        let rightContentDiv = document.createElement('div');
        rightContentDiv.innerHTML = '';
        let taskSummaryDiv = document.createElement('div');
        taskSummaryDiv.className = 'taskSummary';
        
        let taskDivTop = document.createElement('div');
        taskDivTop.className = 'taskDivTop';

        let taskName = document.createElement('div');
        taskName.className = 'taskName';

        let taskHeader = document.createElement('h2');
        taskHeader.textContent = element.name;
        taskHeader.id = element.name;

        taskName.appendChild(taskHeader);
        taskDivTop.appendChild(taskName);

        let dueDate = document.createElement('div');
        dueDate.className = 'dueDate';
        dueDate.textContent = element.dueDate;
        
        taskDivTop.appendChild(dueDate);
        taskDivTop.id = element.name;

        taskSummaryDiv.appendChild(taskDivTop);

        let taskDivBot = document.createElement('div');
        taskDivBot.className = 'taskDivBot';
        taskDivBot.id = element.name;

        let descript = document.createElement('div');
        descript.className = 'descript';
        descript.textContent = element.description;
        descript.id = element.name;

        taskDivBot.appendChild(descript);

        let priority = document.createElement('div');
        priority.className = 'priority';
        priority.id = element.name;

        let priorityHeader = document.createElement('h4');
        priorityHeader.textContent = 'Priority:';
        priorityHeader.id = element.name;

        let lowDiv = document.createElement('div');
        lowDiv.textContent = 'Low';
        lowDiv.id = element.name;
        let medDiv = document.createElement('div');
        medDiv.textContent = 'Medium';
        medDiv.id = element.name;
        let highDiv = document.createElement('div');
        highDiv.textContent = 'High';
        highDiv.id = element.name;

        if (element.priority == 'low') {
            lowDiv.style.backgroundColor = 'green';
            lowDiv.style.color = 'black';
            medDiv.style.color = 'rgb(154, 152, 152)';
            highDiv.style.color = 'rgb(154, 152, 152)';
        }
        if (element.priority == 'med') {
            lowDiv.style.color = 'rgb(154, 152, 152)';
            medDiv.style.backgroundColor = 'yellow';
            medDiv.style.color = 'black';
            highDiv.style.color = 'rgb(154, 152, 152)';
        }
        if (element.priority == 'high') {
            lowDiv.style.color = 'rgb(154, 152, 152)';
            medDiv.style.color = 'rgb(154, 152, 152)';
            highDiv.style.backgroundColor = 'red';
            highDiv.style.color = 'black';
        }

        priority.appendChild(priorityHeader);
        priority.appendChild(lowDiv);
        priority.appendChild(medDiv);
        priority.appendChild(highDiv);

        taskDivBot.appendChild(priority);

        // let coverDiv = document.createElement('div');
        // coverDiv.id = element.name;
        // coverDiv.className = 'coverDiv';
        // coverDiv.setAttribute('position', 'absolute');
        // coverDiv.style.width = '100%';
        
        taskSummaryDiv.appendChild(taskDivBot);
        // taskSummaryDiv.appendChild(coverDiv);
        taskSum = taskSummaryDiv;
        // console.log(taskSum);
    });
    return taskSum;
};

export default taskSumCreat;