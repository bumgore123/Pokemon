

const INPUT_BOX = document.getElementById("input");
const POKEMON_NAME = document.getElementById("pokemon_name");
const POKEMON_TYPE = document.getElementById("pokemon_type")
const POKEMON_WEIGHT = document.getElementById("pokemon_weight");
const POKEMON_HEIGHT = document.getElementById("pokemon_hight");
const POKEMON_SKILLS = document.getElementById("pokemon_skils");
const POKEMON_SKILLSS = document.getElementById("pokemon_skilss");
const PK_IMG = document.getElementById("pk_img")
const URL = "https://pokeapi.co/api/v2/pokemon/"

function search_pokemon() {
    const SEARCH_URL = URL + INPUT_BOX.value;

    fetch(SEARCH_URL).then((response) => {
        if (response.status === 404) {
            alert("not found")
            return;zzz
        } else {
            return response.json();
        }
    }).then((포켓몬_정보) => {
        if (포켓몬_정보) {
            console.log(포켓몬_정보)
            POKEMON_NAME.innerText = 포켓몬_정보.name;
            POKEMON_TYPE.innerText = 포켓몬_정보.types[0].type.name;
            POKEMON_WEIGHT.innerText = 포켓몬_정보.weight;
            POKEMON_HEIGHT.innerText = 포켓몬_정보.height;
            POKEMON_SKILLS.innerText = 포켓몬_정보.abilities[0].ability.name;
            POKEMON_SKILLSS.innerText = 포켓몬_정보.abilities[1].ability.name;
            PK_IMG.src = 포켓몬_정보.sprites.front_default
        }
    }).catch(e => {
        console.log("e", );
    })
}