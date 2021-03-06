var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
 'Fazer café',
 'Estudar Javascript',
 'Acessar comunidade'
];

function renderTodos(){
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#'); //atribuindo href a o elemento 'a'.

        var pos = todos.indexOf(todo); //indexOf retorna a posição de um element.
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')'); //ao clicar no href get a posição e chame a função deleteTodo.

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText); //Excluir é pai de cada 'todo'.

        todoElement.appendChild(todoText); //li é pai de cada 'todo'.
        todoElement.appendChild(linkElement); //li é pai do elelmento a.

        listElement.appendChild(todoElement); //ul é pai de li.

    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1); //Recebe como parametro a posição e a quant. de intens  que deseja exluir.
    renderTodos(); //atuaizar a lista para exibição
}