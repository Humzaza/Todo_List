import { getTaskRecord } from "../../taskmanager/taskChecker";
import addTask from "../contentLeft/AddingTasks/addingTasks";

const ChangeTaskInfo = () => {
    let taskRecord = getTaskRecord();
    let taskSum = document.querySelectorAll('.taskSummary');
    
    taskSum.forEach((task) => {
        task.addEventListener('click', (e) => {
            let taskName = e.target.id;
            
            taskRecord.forEach((element) => {  
                if (taskName == element.name) {
                    addTask();
                    let name = document.getElementById('title')
                    let discription = document.getElementById('description');
                    let dueDate = document.getElementById('dueDate');
                    let notes = document.getElementById('notes');
                    name.textContent = element.name;
                    discription.textContent = element.discription;
                }
            });
        });
    });

};

export default ChangeTaskInfo;