function getJoke() {
    const getJSON = async url => {
        const response = await fetch(url);
        return response.json(); 
    };
    getJSON("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(data => displayJoke(data));

    function displayJoke(data) {
        let jokeString = data;
        console.dir(jokeString);
        if (jokeString.type == 'twopart') { //The Api Object has two types of jokes
            let joke = document.querySelector('#joke');
            joke.textContent = jokeString.setup;
            joke.setAttribute('style', 'color:red;');
            let jokeDelivery = document.createElement('div');
            jokeDelivery.setAttribute('id', '#jokeDelivery');
            jokeDelivery.textContent = jokeString.delivery;
            jokeDelivery.setAttribute('style', 'color:blue;');
            document.querySelector('#joke').appendChild(jokeDelivery);  
        } else if (jokeString.type == 'single') {//This is the second type of joke
            let joke = document.querySelector('#joke');
            joke.textContent = jokeString.joke;
        }
    }
}

getJoke();
newJokeBtn = document.querySelector('#newJoke');
newJokeBtn.addEventListener('click', function () {getJoke()});