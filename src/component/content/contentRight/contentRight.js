import './contentRight.css';
import {getTaskRecord} from '../../taskmanager/taskChecker';

const rightContent = () => {
    // let rightContentDiv = document.createElement('div');
    // rightContentDiv.className = 'rightContent'; 

    let taskRecord = getTaskRecord();
    // console.log(taskRecord);

    let taskSum = '';

    taskRecord.forEach(element => {
        let rightContentDiv = document.createElement('div');
        rightContentDiv.innerHTML = '';
        console.log(element);
        let taskSummaryDiv = document.createElement('div');
        taskSummaryDiv.className = 'taskSummary';
        
        let taskDivTop = document.createElement('div');
        taskDivTop.className = 'taskDivTop';

        let taskName = document.createElement('div');
        taskName.className = 'taskName';

        let taskHeader = document.createElement('h2');
        taskHeader.textContent = element.name;

        taskName.appendChild(taskHeader);
        taskDivTop.appendChild(taskName);

        let dueDate = document.createElement('div');
        dueDate.className = 'dueDate';
        dueDate.textContent = element.dueDate;
        
        taskDivTop.appendChild(dueDate);

        taskSummaryDiv.appendChild(taskDivTop);

        let taskDivBot = document.createElement('div');
        taskDivBot.className = 'taskDivBot';

        let descript = document.createElement('div');
        descript.className = 'descript';
        descript.textContent = element.description;

        taskDivBot.appendChild(descript);

        let priority = document.createElement('div');
        priority.className = 'priority';

        let priorityHeader = document.createElement('h4');
        priorityHeader.textContent = 'Priority:';

        let lowDiv = document.createElement('div');
        lowDiv.textContent = 'Low';
        let medDiv = document.createElement('div');
        medDiv.textContent = 'Medium';
        let highDiv = document.createElement('div');
        highDiv.textContent = 'High';

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

        taskSummaryDiv.appendChild(taskDivBot);
        taskSum = taskSummaryDiv;
        // rightContentDiv.appendChild(taskSummaryDiv);
    });
    // console.log(taskSum);
    return taskSum;
    
};

export default rightContent;