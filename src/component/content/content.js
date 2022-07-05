import './content.css';
import contentLeft from './contentLeft/contentLeft.js';

const content = () => {
    let contentL = contentLeft();
    // let contentR = rightContent();
    const contentMain = document.createElement('div');
    contentMain.className = 'content';
    contentMain.appendChild(contentL);    
    const rightContent = document.createElement('div');
    rightContent.className = 'rightContent';
    contentMain.appendChild(rightContent);
    
    let layout = document.querySelector('.layout');
    layout.appendChild(contentMain);

};

export default content;