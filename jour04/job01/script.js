window.addEventListener("DOMContentLoaded", (event) => {

    let text = document.querySelector('expression')

    let btn = document.getElementById('button')

    btn.addEventListener('click', function(){
        fetch('expression.txt')
        .then(function (response) {response.text() })
        .then(function (response) {console.log(response) })
        .catch((error) => console.log(error))
    })

})