var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function listar(){
    var user = inputElement.value;

    if(!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepo(response.data);
        })
}

function renderRepo(repositories){
    for (repo of repositories){
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}