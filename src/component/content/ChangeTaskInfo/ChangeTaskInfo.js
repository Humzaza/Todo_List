import { getTaskRecord } from "../../taskmanager/taskChecker";
import addTask from "../contentLeft/AddingTasks/addingTasks";
import taskSumCreat from "../contentRight/taskSummary/taskSumCreat";

const ChangeTaskInfo = () => {
    let taskRecord = getTaskRecord();
    let taskSum = document.querySelectorAll('.taskSummary');
    taskSum.forEach((task) => {
        task.addEventListener('click', (e) => {
            let taskName = e.target.id;
            taskRecord.forEach((element) => {  
                if (taskName == element.name) {
                    if (document.querySelector('.dim')) {
                        let dimScreen = document.querySelector('.dim');
                        dimScreen.remove();
                        // console.log(dimScreen);
                    }
                    addTask();

                    let name = document.getElementById('title')
                    let discription = document.getElementById('description');
                    let dueDate = document.getElementById('dueDate');
                    let notes = document.getElementById('notes');
                    let priority = element.priority;
                    let lowDiv = document.getElementById('low'); 
                    let medDiv = document.getElementById('med'); 
                    let highDiv = document.getElementById('high'); 
                    name.value = element.name;
                    discription.value = element.description;
                    dueDate.value = element.dueDate;
                    notes.value = element.notes;

                    if (element.priority == 'low') {
                        lowDiv.style.backgroundColor = 'black';
                        medDiv.style.color = 'rgb(154, 152, 152)';
                        highDiv.style.color = 'rgb(154, 152, 152)';
                    }
                    if (element.priority == 'med') {
                        lowDiv.style.color = 'rgb(154, 152, 152)';
                        medDiv.style.backgroundColor = 'black';
                        highDiv.style.color = 'rgb(154, 152, 152)';
                    }
                    if (element.priority == 'high') {
                        lowDiv.style.color = 'rgb(154, 152, 152)';
                        medDiv.style.color = 'rgb(154, 152, 152)';
                        highDiv.style.backgroundColor = 'black';
                    }
                    // console.log(taskRecord);
                    // console.log(taskRecord.indexOf(element));
                    taskRecord.splice(taskRecord.indexOf(element), 1);
                    let rightContent = document.querySelector('.rightContent');
                    rightContent.innerHTML = '';
                    let content = taskSumCreat();
                    let saveTaskBtn = document.getElementById('save');

                    // saveTaskBtn.addEventListener('click', () => {
                    //     rightContent.appendChild(content);
                    // });

                    // console.log(taskRecord);
                }
            });
        });
    });

};

export default ChangeTaskInfo;