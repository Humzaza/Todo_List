import './header.css';

const header = () => {
    let headerDiv = document.createElement('header');
    headerDiv.textContent = 'Todo-o-o-o-s';

    let layout = document.querySelector('.layout');
    layout.appendChild(headerDiv);
}

export default header;