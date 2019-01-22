var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function listar(){
    var user = inputElement.value;

    if(!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepo(response.data);
        })
        .catch(function (){
            renderError();
        });
}

function renderRepo(repositories){
    listElement.innerHTML = "";

    for (repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderError(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
    
}

function renderLoading(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }