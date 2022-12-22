function fetchPokemon(){
    // var result = fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
    // console.log(result);

    var input = document.querySelector("input");

    fetch("https://pokeapi.co/api/v2/pokemon/"+input.value)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(res => {
            console.log("here is the final information for you to use");
            console.log(res.sprites.front_default);
            var image = document.querySelector("img");
            image.src = res.sprites.front_default;
        })
        .catch(err => {
            alert("it didn't work");
            console.log(err);
        })
}