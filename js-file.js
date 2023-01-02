const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redp = document.createElement('p');
redp.classList.add('red-p');
redp.textContent = 'Hey I’m red!';
redp.style.color = 'red';
container.appendChild(redp);

const blueh = document.createElement('h3');
blueh.textContent = 'I’m a blue h3!';
blueh.setAttribute('style', 'color: blue;');
container.appendChild(blueh);

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background: pink;';
container.appendChild(div);

const divh = document.createElement('h1');
divh.textContent = 'I’m in a div';
div.appendChild(divh);

const divp = document.createElement('p');
divp.textContent = 'ME TOO!';
div.appendChild(divp);