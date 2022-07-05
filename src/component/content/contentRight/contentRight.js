import './contentRight.css';

const rightContent = () => {
    let rightContentDiv = document.createElement('div');
    rightContentDiv.className = 'rightContent'; 

    


    let taskSummaryDiv = document.createElement('div');
    taskSummaryDiv.className = 'taskSummary';
    
    let taskDivTop = document.createElement('div');
    taskDivTop.className = 'taskDivTop';

    let taskName = document.createElement('div');
    taskName.className = 'taskName';

    let taskHeader = document.createElement('h2');
    taskHeader.textContent = 'Task Name';

    taskName.appendChild(taskHeader);
    taskDivTop.appendChild(taskName);

    let dueDate = document.createElement('div');
    dueDate.className = 'dueDate';
    dueDate.textContent = 'Due Date';
    
    taskDivTop.appendChild(dueDate);

    taskSummaryDiv.appendChild(taskDivTop);

    let taskDivBot = document.createElement('div');
    taskDivBot.className = 'taskDivBot';

    let descript = document.createElement('div');
    descript.className = 'descript';
    descript.textContent = 'Descriptions.... ';

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

    priority.appendChild(priorityHeader);
    priority.appendChild(lowDiv);
    priority.appendChild(medDiv);
    priority.appendChild(highDiv);

    taskDivBot.appendChild(priority);

    taskSummaryDiv.appendChild(taskDivBot);

    rightContentDiv.appendChild(taskSummaryDiv);

    return rightContentDiv;
    
};

export default rightContent;