import './content.css';
import contentLeft from './contentLeft/contentLeft.js';
import rightContent from './contentRight/contentRight';

const content = () => {
    let contentL = contentLeft();
    let contentR = rightContent();
    const contentMain = document.createElement('div');
    contentMain.className = 'content';
    contentMain.appendChild(contentL);    
    contentMain.appendChild(contentR);
    
    let layout = document.querySelector('.layout');
    layout.appendChild(contentMain);

};

export default content;