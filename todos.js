// EN Step-by-step:
// 1) grab all relevant elements: input, buttons and ul
// 2) set up the li inside a variable
// 3) add event listener to the add button, so the ul will append the new li with the input text inside
// 4) use remove method to add event listener to single delete button
// 5) add event listener to li to toggle class "done" and change li background color
// 6) add event listener to clear button to remove all

// PT-BR Passo-a-passo:
// 1) armazenar todos os elementos relevantes em variáveis: input, buttons e ul
// 2) montar o li dentro de uma variável
// 3) adicionar o event listener ao botão de adicionar novo to-do, para fazer um append do li dentro do ul com o texto do input dentro
// 4) usar o método de remover associado ao event listener para cada botão de deletar
// 5) adicionar um event listener aos li para ativar a classe "done" e mudar a cor de fundo do li
// 6) adicionar event listener ao botão de limpar para remover todos os li com innerHTML = ''

// 1
const taskInput = document.querySelector('input');
const addTask = document.querySelector('button');
let ul = document.querySelector('ul');
const clearButton = document.querySelector('#clear');

// 2, 3
addTask.addEventListener('click', () => {
    if (taskInput.value === '') {
        return
    }
    let newLi = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>'
    deleteButton.setAttribute('class', 'remove');
    newLi.innerText += taskInput.value;
    newLi.appendChild(deleteButton);
    ul.appendChild(newLi);
    taskInput.value = '';
// 4
    deleteButton.addEventListener('click', () => {
        newLi.remove();
    })
// 5
    const item = document.querySelectorAll('li');
    item.forEach(item => {
        item.addEventListener('click', e => {
            item.setAttribute('class', 'done');
        })
    })
})

// 6
clearButton.addEventListener('click', () => {
    ul.innerHTML = '';
})