document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#pname');
    const username = document.querySelector('#puser');
    const avatar = document.querySelector('#avatar');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const repository = document.querySelector('#rep');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/Felipe0L')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        console.log(json);
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
        repository.innerText = json.public_repos;
        link.href = json.html_url;
    })
})