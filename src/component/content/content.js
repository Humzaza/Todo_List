import './content.css';
import contentLeft from './contentLeft/contentLeft.js';

const content = () => {
    let contentL = contentLeft();
    const contentMain = document.createElement('div');
    contentMain.className = 'content';
    contentMain.appendChild(contentL);
    // contentMain.appendChild();
    
    let layout = document.querySelector('.layout');
    layout.appendChild(contentMain);

};

export default content;