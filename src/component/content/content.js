import './content.css';
import contentLeft from './contentLeft/contentLeft.js';

const content = () => {
    let conLeft = contentLeft();
    const contentMain = document.createElement('div');
    contentMain.className = 'content';
    contentMain.appendChild(conLeft);
    // contentMain.appendChild();
    
    let layout = document.querySelector('.layout');
    layout.appendChild(contentMain);

};

export default content;