axios.get('https://api.github.com/users/PolixeniaCorreia')
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });