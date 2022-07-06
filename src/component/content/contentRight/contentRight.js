import './contentRight.css';
import taskSumCreat from './taskSummary/taskSumCreat';

const rightContent = () => {
    const rightContent = document.createElement('div');
    rightContent.className = 'rightContent';
    // let taskSum = taskSumCreat();
    // console.log(taskSum);
    // // rightContent.appendChild(taskSum);

    return rightContent;
    
};

export default rightContent;