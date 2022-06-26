import './footer.css';

const footer = () => {
    let footer = document.createElement('footer');
    footer.textContent = 'Created by Humzaza';

    let layout = document.querySelector('.layout');
    layout.appendChild(footer);

};

export default footer;